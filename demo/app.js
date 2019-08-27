import React, { Component } from 'react';
import SortableTree, {toggleExpandedForAll } from 'react-sortable-tree';
import _ from 'lodash';

import FileExplorerTheme from '../index';
import schema from './example.schema';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: '',
      searchFocusIndex: 0,
      searchFoundCount: null,
      selectedPaths: [],
      treeData: this.getInitialTreeData(),
    };

    this.updateTreeData = this.updateTreeData.bind(this);
    this.expandAll = this.expandAll.bind(this);
    this.collapseAll = this.collapseAll.bind(this);
    this.toggleSelectedNode = this.toggleSelectedNode.bind(this);
    this.getInitialTreeData = this.getInitialTreeData.bind(this);
    this.buildObject = this.buildObject.bind(this);
    this.clearSelected = this.clearSelected.bind(this);
  }

  getInitialTreeData() {
    const { nodes } = this.buildObject(schema.properties);
    return nodes;
  }

  buildObject(propertiesObj, basePath = '', baseOrder = '') {
    return Object.entries(propertiesObj).reduce((acc, [propKey, propSchema]) => {
      if (propKey !== 'userDefined' && !propSchema.isDisabled) {
        // The schemaType will be one of: loopArray, segmentArray, element.
        const type = propSchema.schemaType;

        // Find the identifier for the type. Only elements and segments have identifiers.
        const identifierPath = type === 'element' ? 'elementIdentifier' : 'items.segmentIdentifier';
        const titlePath = type === 'element' ? 'title' : 'items.title';
        const path = _.compact([acc.path, propKey]).join('.');
        const descriptionItemsPath = 'items.description';
        const descriptionPath = 'description';
        const placeholder =
          _.get(propSchema, descriptionItemsPath) || _.get(propSchema, descriptionPath);

        const X12Requirement = _.get(propSchema, 'X12Requirement');
        let X12MinLength;
        let X12MaxLength;
        let X12DataElementType;
        let X12MaxUse;
        let X12LoopRepeat;

        switch (type) {
          case 'element': {
            X12MinLength = _.get(propSchema, 'X12MinLength');
            X12MaxLength = _.get(propSchema, 'X12MaxLength');
            X12DataElementType = _.get(propSchema, 'X12DataElementType');
            break;
          }
          case 'segmentArray': {
            X12MaxUse = _.get(propSchema, 'X12MaxUse');
            break;
          }
          case 'loopArray': {
            X12LoopRepeat = _.get(propSchema, 'X12LoopRepeat');
            break;
          }
          default: {
            X12MinLength = '';
            X12MaxLength = '';
            X12DataElementType = '';
            X12MaxUse = '';
            X12LoopRepeat = '';
          }
        }

        const nodeProps = {
          type,
          path,
          // This regex captures everything after the first - in the schema's description
          // Ex: 'ISA01 - This is the description - This is the second part of the description'
          // Should capture 'This is the description - This is the second part of the description'
          // so the identifier is left out of the title.
          title: _.get(propSchema, titlePath, '').match(/^(?:\S+ - )?(.*)/)[1] || _.startCase(propKey),
          identifier: _.get(propSchema, identifierPath, ''),
          depth: path.split('.').length,
          isCollapsed: false,
          isTreeCollapsed: false,
          isCodesOpen: false,
          placeholder,
          X12Requirement,
          X12MinLength,
          X12MaxLength,
          X12DataElementType,
          X12MaxUse,
          X12LoopRepeat,
        };

        if (type === 'element') {
          acc.nodes.push(nodeProps);
        } else if (type === 'loopArray' || type === 'segmentArray') {
          nodeProps.type = type === 'loopArray' ? 'loop' : 'segment';
          const nextPath = `${nodeProps.path}.*`;
          const nextOrder = _.get(propSchema, 'loopContents', '').split('-');
          const properties = this.buildObject(propSchema.items.properties, nextPath, nextOrder);
          // Add the loop or segment node
          acc.nodes.push(nodeProps);
          // Add the loop or segment contents nodes
          nodeProps.children = properties.nodes
          // acc.nodes.push(...properties.nodes);
        } else {
          throw new Error(`Unknown subSchema type for ${propKey}: ${propSchema}`);
        }
      }

      return acc;
    }, { path: basePath, order: baseOrder, nodes: [] });
  }

  updateTreeData(treeData) {
    this.setState({ treeData });
  }

  expand(expanded) {
    this.setState({
      treeData: toggleExpandedForAll({
        treeData: this.state.treeData,
        expanded,
      }),
    });
  }

  expandAll() {
    this.expand(true);
  }

  collapseAll() {
    this.expand(false);
  }

  toggleSelectedNode(path) {
    let newSelectedPaths;
    if (!this.state.selectedPaths.includes(path)) {
      newSelectedPaths = [...this.state.selectedPaths, path];
    } else {
      newSelectedPaths = _.filter(this.state.selectedPaths, (o) => o !== path);
    }
    this.setState({
      selectedPaths: newSelectedPaths,
    });
  }

  clearSelected() {
    this.setState({ selectedPaths: [] });
  }

  render() {
    const {
      treeData,
      searchString,
      searchFocusIndex,
      searchFoundCount,
      selectedPaths,
    } = this.state;

    const alertNodeInfo = ({ node, path, treeIndex }) => {
      const objectString = Object.keys(node)
        .map(k => (k === 'children' ? 'children: Array' : `${k}: '${node[k]}'`))
        .join(',\n   ');

      global.alert(
        'Info passed to the icon and button generators:\n\n' +
          `node: {\n   ${objectString}\n},\n` +
          `path: [${path.join(', ')}],\n` +
          `treeIndex: ${treeIndex}`
      );
    };

    const selectPrevMatch = () =>
      this.setState({
        searchFocusIndex:
          searchFocusIndex !== null
            ? (searchFoundCount + searchFocusIndex - 1) % searchFoundCount
            : searchFoundCount - 1,
      });

    const selectNextMatch = () =>
      this.setState({
        searchFocusIndex:
          searchFocusIndex !== null
            ? (searchFocusIndex + 1) % searchFoundCount
            : 0,
      });

    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexFlow: 'row wrap',
      }}>
        <div>
          <div style={{ margin: '0 0 16px 0' }}>
            <h3>Orderful guideline builder</h3>
            <p>{this.state.selectedPaths.length} elements selected</p>
            <button onClick={this.clearSelected}>Clear selected</button>
            <button onClick={this.expandAll}>Expand All</button>
            <button onClick={this.collapseAll}>Collapse All</button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <form
              style={{ display: 'inline-block' }}
              onSubmit={event => {
                event.preventDefault();
              }}
            >
              <label htmlFor="find-box">
                Search:&nbsp;
                <input
                  id="find-box"
                  type="text"
                  value={searchString}
                  onChange={event =>
                    this.setState({ searchString: event.target.value })
                  }
                />
              </label>

              <button
                type="button"
                disabled={!searchFoundCount}
                onClick={selectPrevMatch}
              >
                &lt;
              </button>

              <button
                type="submit"
                disabled={!searchFoundCount}
                onClick={selectNextMatch}
              >
                &gt;
              </button>

              <span>
                &nbsp;
                {searchFoundCount > 0 ? searchFocusIndex + 1 : 0}
                &nbsp;/&nbsp;
                {searchFoundCount || 0}
              </span>
            </form>
          </div>
          <SortableTree
            theme={FileExplorerTheme}
            treeData={treeData}
            onChange={this.updateTreeData}
            searchQuery={searchString}
            searchFocusOffset={searchFocusIndex}
            searchFinishCallback={matches =>
              this.setState({
                searchFoundCount: matches.length,
                searchFocusIndex:
                  matches.length > 0 ? searchFocusIndex % matches.length : 0,
              })
            }
            canDrag={() => (false)}
            canDrop={() => (false)}
            generateNodeProps={rowInfo => ({
              icons: [
                <div>
                  <input
                    type="checkbox"
                    id="scales"
                    name="scales"
                    checked={
                      selectedPaths.includes(rowInfo.node.path) ? 'checked' : ''
                    }
                    onChange={() => this.toggleSelectedNode(rowInfo.node.path)}
                  />
                </div>
              ],
              buttons: [
                <button
                  style={{
                    padding: 0,
                    borderRadius: '100%',
                    backgroundColor: 'gray',
                    color: 'white',
                    width: 16,
                    height: 16,
                    border: 0,
                    fontWeight: 100,
                  }}
                  onClick={() => alertNodeInfo(rowInfo)}
                >
                  i
                </button>,
              ],
            })}
            rowHeight={40}
            innerStyle={{
              overflowY: 'scroll',
              borderRadius: 4,
              border: '1px solid #E0E0E0',
            }}
            style={{
              width: 624,
              height: 421,
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
