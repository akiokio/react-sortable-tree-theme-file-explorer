const schema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "http://orderful.com/schemas/versions/004010/810_004010.schema.json",
  "title": "810 - Invoice",
  "type": "object",
  "required": [
    "transactionSets"
  ],
  "additionalProperties": false,
  "properties": {
    "ISA": {
      "schemaType": "segmentArray",
      "type": "array",
      "items": {
        "schemaType": "segment",
        "title": "ISA - Interchange Control Header",
        "description": "To start and identify an interchange of zero or more functional groups and interchange-related control segments. Note that messages sent to Orderful can contain only a single functional group.",
        "segmentIdentifier": "ISA",
        "type": "object",
        "minProperties": 1,
        "additionalProperties": false,
        "properties": {
          "ISA01": {
            "schemaType": "element",
            "type": "string",
            "title": "ISA01 - Authorization Information Qualifier",
            "description": "Code to identify the type of information in the Authorization Information. Type : alphanumeric. Sample value : '00' : No Authorization Information Present (No Meaningful Information in I02). ",
            "elementIdentifier": "ISA01"
          },
          "ISA02": {
            "schemaType": "element",
            "type": "string",
            "title": "ISA02 - Authorization Information",
            "description": "Information used for additional identification or authorization of the interchange sender or the data in the interchange; the type of information is set by the Authorization Information Qualifier (I01). Type : alphanumeric. Sample value : '          '. ",
            "elementIdentifier": "ISA02"
          },
          "ISA03": {
            "schemaType": "element",
            "type": "string",
            "title": "ISA03 - Security Information Qualifier",
            "description": "Code to identify the type of information in the Security Information. Type : alphanumeric. Sample value : '00' : No Security Information Present (No Meaningful Information in I04). ",
            "elementIdentifier": "ISA03"
          },
          "ISA04": {
            "schemaType": "element",
            "type": "string",
            "title": "ISA04 - Security Information",
            "description": "This is used for identifying the security information about the interchange sender or the data in the interchange; the type of information is set by the Security Information Qualifier (I03). Type : alphanumeric. Sample value : '          '. ",
            "elementIdentifier": "ISA04"
          },
          "ISA05": {
            "schemaType": "element",
            "type": "string",
            "title": "ISA05 - Interchange ID Qualifier",
            "description": "Qualifier to designate the system/method of code structure used to designate the sender or receiver ID element being qualified. Type : alphanumeric.",
            "elementIdentifier": "ISA05"
          },
          "ISA06": {
            "schemaType": "element",
            "type": "string",
            "title": "ISA06 - Interchange Sender ID",
            "description": "Identification code published by the sender for other parties to use as the receiver ID to route data to them; the sender always codes this value in the sender ID element. Type : alphanumeric.",
            "elementIdentifier": "ISA06"
          },
          "ISA07": {
            "schemaType": "element",
            "type": "string",
            "title": "ISA07 - Interchange ID Qualifier",
            "description": "Qualifier to designate the system/method of code structure used to designate the sender or receiver ID element being qualified. Type : alphanumeric.",
            "elementIdentifier": "ISA07"
          },
          "ISA08": {
            "schemaType": "element",
            "type": "string",
            "title": "ISA08 - Interchange Receiver ID",
            "description": "Identification code published by the receiver of the data; When sending, it is used by the sender as their sending ID, thus other parties sending to them will use this as a receiving ID to route data to them. Type : alphanumeric.",
            "elementIdentifier": "ISA08"
          },
          "ISA09": {
            "schemaType": "element",
            "type": "string",
            "title": "ISA09 - Interchange Date",
            "description": "Date of the interchange. Type : date.",
            "elementIdentifier": "ISA09"
          },
          "ISA10": {
            "schemaType": "element",
            "type": "string",
            "title": "ISA10 - Interchange Time",
            "description": "Time of the interchange. Type : time.",
            "elementIdentifier": "ISA10"
          },
          "ISA11": {
            "schemaType": "element",
            "type": "string",
            "title": "ISA11 - Interchange Control Standards Identifier",
            "description": "Code to identify the agency responsible for the control standard used by the message that is enclosed by the interchange header and trailer. Type : alphanumeric. Sample value : '^'. ",
            "elementIdentifier": "ISA11"
          },
          "ISA12": {
            "schemaType": "element",
            "type": "string",
            "title": "ISA12 - Interchange Control Version Number",
            "description": "This version number covers the interchange control segments. Type : alphanumeric. Sample value : '00401' : Draft Standards for Trial Use Approved for Publication by ASC X12 Procedures Review Board through October 1997. ",
            "elementIdentifier": "ISA12"
          },
          "ISA13": {
            "schemaType": "element",
            "type": "string",
            "title": "ISA13 - Interchange Control Number",
            "description": "A control number assigned by the interchange sender. Type : n0 (number, no implied decimal).",
            "elementIdentifier": "ISA13"
          },
          "ISA14": {
            "schemaType": "element",
            "type": "string",
            "title": "ISA14 - Acknowledgment Requested",
            "description": "Code sent by the sender to request an interchange acknowledgment (TA1). Type : alphanumeric.",
            "elementIdentifier": "ISA14"
          },
          "ISA15": {
            "schemaType": "element",
            "type": "string",
            "title": "ISA15 - Usage Indicator",
            "description": "Code to indicate whether data enclosed by this interchange envelope is test, production or information. Type : alphanumeric.",
            "elementIdentifier": "ISA15"
          },
          "ISA16": {
            "schemaType": "element",
            "type": "string",
            "title": "ISA16 - Component Element Separator",
            "description": "Type is not applicable; the component element separator is a delimiter and not a data element; this field provides the delimiter used to separate component data elements within a composite data structure; this value must be different than the data element separator and the segment terminator. Type : alphanumeric. Sample value : '>'. ",
            "elementIdentifier": "ISA16"
          }
        }
      }
    },
    "GS": {
      "schemaType": "segmentArray",
      "type": "array",
      "items": {
        "schemaType": "segment",
        "title": "GS - Functional Group Header",
        "description": "To indicate the beginning of a functional group and to provide control information. Note that in messages sent to Orderful, all transaction sets within a functional group must be of the same document type.",
        "segmentIdentifier": "GS",
        "type": "object",
        "minProperties": 1,
        "additionalProperties": false,
        "properties": {
          "GS01": {
            "schemaType": "element",
            "type": "string",
            "title": "GS01 - Functional Identifier Code",
            "description": "Code identifying a group of application related transaction sets. Type : alphanumeric.",
            "elementIdentifier": "GS01"
          },
          "GS02": {
            "schemaType": "element",
            "type": "string",
            "title": "GS02 - Application Sender's Code",
            "description": "Code identifying party sending transmission; codes agreed to by trading partners. Type : alphanumeric.",
            "elementIdentifier": "GS02"
          },
          "GS03": {
            "schemaType": "element",
            "type": "string",
            "title": "GS03 - Application Receiver's Code",
            "description": "Code identifying party receiving transmission. Codes agreed to by trading partners. Type : alphanumeric.",
            "elementIdentifier": "GS03"
          },
          "GS04": {
            "schemaType": "element",
            "type": "string",
            "title": "GS04 - Date",
            "description": "Date expressed as CCYYMMDD. Type : date.",
            "elementIdentifier": "GS04"
          },
          "GS05": {
            "schemaType": "element",
            "type": "string",
            "title": "GS05 - Time",
            "description": "Time expressed in 24-hour clock time as follows: HHMM, or HHMMSS, or HHMMSSD, or HHMMSSDD, where H = hours (00-23), M = minutes (00-59), S = integer seconds (00-59) and DD = decimal seconds; decimal seconds are expressed as follows: D = tenths (0-9) and DD = hundredths (00-99). Type : time.",
            "elementIdentifier": "GS05"
          },
          "GS06": {
            "schemaType": "element",
            "type": "string",
            "title": "GS06 - Group Control Number",
            "description": "Assigned number originated and maintained by the sender. Type : n0 (number, no implied decimal).",
            "elementIdentifier": "GS06"
          },
          "GS07": {
            "schemaType": "element",
            "type": "string",
            "title": "GS07 - Responsible Agency Code",
            "description": "Code used in conjunction with Data Element 480 to identify the issuer of the standard. Type : alphanumeric. Sample value : 'X' : Accredited Standards Committee X12. ",
            "elementIdentifier": "GS07"
          },
          "GS08": {
            "schemaType": "element",
            "type": "string",
            "title": "GS08 - Version / Release / Industry Identifier Code",
            "description": "Code indicating the version, release, subrelease, and industry identifier of the EDI standard being used, including the GS and GE segments; if code in DE455 in GS segment is X, then in DE 480 positions 1-3 are the version number; positions 4-6 are the release and subrelease, level of the version; and positions 7-12 are the industry or trade association identifiers (optionally assigned by user); if code in DE455 in GS segment is T, then other formats are allowed. Type : alphanumeric. Sample value : '004010'. ",
            "elementIdentifier": "GS08"
          }
        }
      }
    },
    "transactionSets": {
      "schemaType": "loopArray",
      "type": "array",
      "loopContents": "ST-BIG-NTE-CUR-REF-YNQ-PER-N1_loop-ITD-DTM-FOB-PID-MEA-PWK-PKG-L7-BAL-INC-PAM-LM_loop-N9_loop-V1_loop-FA1_loop-IT1_loop-TDS-TXI-CAD-AMT-SAC_loop-ISS_loop-CTT-SE",
      "minItems": 1,
      "items": {
        "schemaType": "loop",
        "type": "object",
        "minProperties": 1,
        "additionalProperties": false,
        "properties": {
          "ST": {
            "schemaType": "segmentArray",
            "type": "array",
            "items": {
              "schemaType": "segment",
              "title": "ST - Transaction Set Header",
              "description": "To indicate the start of a transaction set and to assign a control number",
              "segmentIdentifier": "ST",
              "type": "object",
              "minProperties": 1,
              "additionalProperties": false,
              "properties": {
                "ST01": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "ST01 - Transaction Set Identifier Code",
                  "description": "Code uniquely identifying a Transaction Set",
                  "elementIdentifier": "ST01"
                },
                "ST02": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "ST02 - Transaction Set Control Number",
                  "description": "Identifying control number that must be unique within the transaction set functional group assigned by the originator for a transaction set",
                  "elementIdentifier": "ST02"
                }
              }
            }
          },
          "BIG": {
            "schemaType": "segmentArray",
            "type": "array",
            "items": {
              "schemaType": "segment",
              "title": "BIG - Beginning Segment for Invoice",
              "description": "To indicate the beginning of an invoice transaction set and transmit identifying numbers and dates",
              "segmentIdentifier": "BIG",
              "type": "object",
              "minProperties": 1,
              "additionalProperties": false,
              "properties": {
                "BIG01": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "BIG01 - Date",
                  "description": "Date expressed as CCYYMMDD",
                  "elementIdentifier": "BIG01"
                },
                "BIG02": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "BIG02 - Invoice Number",
                  "description": "Identifying number assigned by issuer",
                  "elementIdentifier": "BIG02"
                },
                "BIG03": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "BIG03 - Date",
                  "description": "Date expressed as CCYYMMDD",
                  "elementIdentifier": "BIG03"
                },
                "BIG04": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "BIG04 - Purchase Order Number",
                  "description": "Identifying number for Purchase Order assigned by the orderer/purchaser",
                  "elementIdentifier": "BIG04"
                },
                "BIG05": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "BIG05 - Release Number",
                  "description": "Number identifying a release against a Purchase Order previously placed by the parties involved in the transaction",
                  "elementIdentifier": "BIG05"
                },
                "BIG06": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "BIG06 - Change Order Sequence Number",
                  "description": "Number assigned by the orderer identifying a specific change or revision to a previously transmitted transaction set",
                  "elementIdentifier": "BIG06"
                },
                "BIG07": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "BIG07 - Transaction Type Code",
                  "description": "Code specifying the type of transaction",
                  "elementIdentifier": "BIG07"
                },
                "BIG08": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "BIG08 - Transaction Set Purpose Code",
                  "description": "Code identifying purpose of transaction set",
                  "elementIdentifier": "BIG08"
                },
                "BIG09": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "BIG09 - Action Code",
                  "description": "Code indicating type of action",
                  "elementIdentifier": "BIG09"
                },
                "BIG10": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "BIG10 - Invoice Number",
                  "description": "Identifying number assigned by issuer",
                  "elementIdentifier": "BIG10"
                }
              }
            }
          },
          "NTE": {
            "schemaType": "segmentArray",
            "type": "array",
            "items": {
              "schemaType": "segment",
              "title": "NTE - Note/Special Instruction",
              "description": "To transmit information in a free-form format, if necessary, for comment or special instruction",
              "segmentIdentifier": "NTE",
              "type": "object",
              "minProperties": 1,
              "additionalProperties": false,
              "properties": {
                "NTE01": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "NTE01 - Note Reference Code",
                  "description": "Code identifying the functional area or purpose for which the note applies",
                  "elementIdentifier": "NTE01"
                },
                "NTE02": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "NTE02 - Description",
                  "description": "A free-form description to clarify the related data elements and their content",
                  "elementIdentifier": "NTE02"
                }
              }
            }
          },
          "CUR": {
            "schemaType": "segmentArray",
            "type": "array",
            "items": {
              "schemaType": "segment",
              "title": "CUR - Currency",
              "description": "To specify the currency (dollars, pounds, francs, etc.) used in a transaction",
              "segmentIdentifier": "CUR",
              "type": "object",
              "minProperties": 1,
              "additionalProperties": false,
              "properties": {
                "CUR01": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "CUR01 - Entity Identifier Code",
                  "description": "Code identifying an organizational entity, a physical location, property or an individual",
                  "elementIdentifier": "CUR01"
                },
                "CUR02": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "CUR02 - Currency Code",
                  "description": "Code (Standard ISO) for country in whose currency the charges are specified",
                  "elementIdentifier": "CUR02"
                },
                "CUR03": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "CUR03 - Exchange Rate",
                  "description": "Value to be used as a multiplier conversion factor to convert monetary value from one currency to another",
                  "elementIdentifier": "CUR03"
                },
                "CUR04": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "CUR04 - Entity Identifier Code",
                  "description": "Code identifying an organizational entity, a physical location, property or an individual",
                  "elementIdentifier": "CUR04"
                },
                "CUR05": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "CUR05 - Currency Code",
                  "description": "Code (Standard ISO) for country in whose currency the charges are specified",
                  "elementIdentifier": "CUR05"
                },
                "CUR06": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "CUR06 - Currency Market/Exchange Code",
                  "description": "Code identifying the market upon which the currency exchange rate is based",
                  "elementIdentifier": "CUR06"
                },
                "CUR07": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "CUR07 - Date/Time Qualifier",
                  "description": "Code specifying type of date or time, or both date and time",
                  "elementIdentifier": "CUR07"
                },
                "CUR08": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "CUR08 - Date",
                  "description": "Date expressed as CCYYMMDD",
                  "elementIdentifier": "CUR08"
                },
                "CUR09": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "CUR09 - Time",
                  "description": "Time expressed in 24-hour clock time as follows: HHMM, or HHMMSS, or HHMMSSD, or HHMMSSDD, where H = hours (00-23), M = minutes (00-59), S = integer seconds (00-59) and DD = decimal seconds; decimal seconds are expressed as follows: D = tenths (0-9) and DD = hundredths (00-99)",
                  "elementIdentifier": "CUR09"
                },
                "CUR10": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "CUR10 - Date/Time Qualifier",
                  "description": "Code specifying type of date or time, or both date and time",
                  "elementIdentifier": "CUR10"
                },
                "CUR11": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "CUR11 - Date",
                  "description": "Date expressed as CCYYMMDD",
                  "elementIdentifier": "CUR11"
                },
                "CUR12": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "CUR12 - Time",
                  "description": "Time expressed in 24-hour clock time as follows: HHMM, or HHMMSS, or HHMMSSD, or HHMMSSDD, where H = hours (00-23), M = minutes (00-59), S = integer seconds (00-59) and DD = decimal seconds; decimal seconds are expressed as follows: D = tenths (0-9) and DD = hundredths (00-99)",
                  "elementIdentifier": "CUR12"
                },
                "CUR13": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "CUR13 - Date/Time Qualifier",
                  "description": "Code specifying type of date or time, or both date and time",
                  "elementIdentifier": "CUR13"
                },
                "CUR14": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "CUR14 - Date",
                  "description": "Date expressed as CCYYMMDD",
                  "elementIdentifier": "CUR14"
                },
                "CUR15": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "CUR15 - Time",
                  "description": "Time expressed in 24-hour clock time as follows: HHMM, or HHMMSS, or HHMMSSD, or HHMMSSDD, where H = hours (00-23), M = minutes (00-59), S = integer seconds (00-59) and DD = decimal seconds; decimal seconds are expressed as follows: D = tenths (0-9) and DD = hundredths (00-99)",
                  "elementIdentifier": "CUR15"
                },
                "CUR16": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "CUR16 - Date/Time Qualifier",
                  "description": "Code specifying type of date or time, or both date and time",
                  "elementIdentifier": "CUR16"
                },
                "CUR17": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "CUR17 - Date",
                  "description": "Date expressed as CCYYMMDD",
                  "elementIdentifier": "CUR17"
                },
                "CUR18": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "CUR18 - Time",
                  "description": "Time expressed in 24-hour clock time as follows: HHMM, or HHMMSS, or HHMMSSD, or HHMMSSDD, where H = hours (00-23), M = minutes (00-59), S = integer seconds (00-59) and DD = decimal seconds; decimal seconds are expressed as follows: D = tenths (0-9) and DD = hundredths (00-99)",
                  "elementIdentifier": "CUR18"
                },
                "CUR19": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "CUR19 - Date/Time Qualifier",
                  "description": "Code specifying type of date or time, or both date and time",
                  "elementIdentifier": "CUR19"
                },
                "CUR20": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "CUR20 - Date",
                  "description": "Date expressed as CCYYMMDD",
                  "elementIdentifier": "CUR20"
                },
                "CUR21": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "CUR21 - Time",
                  "description": "Time expressed in 24-hour clock time as follows: HHMM, or HHMMSS, or HHMMSSD, or HHMMSSDD, where H = hours (00-23), M = minutes (00-59), S = integer seconds (00-59) and DD = decimal seconds; decimal seconds are expressed as follows: D = tenths (0-9) and DD = hundredths (00-99)",
                  "elementIdentifier": "CUR21"
                }
              }
            }
          },
          "REF": {
            "schemaType": "segmentArray",
            "type": "array",
            "items": {
              "schemaType": "segment",
              "title": "REF - Reference Identification",
              "description": "To specify identifying information",
              "segmentIdentifier": "REF",
              "type": "object",
              "minProperties": 1,
              "additionalProperties": false,
              "properties": {
                "REF01": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "REF01 - Reference Identification Qualifier",
                  "description": "Code qualifying the Reference Identification",
                  "elementIdentifier": "REF01"
                },
                "REF02": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "REF02 - Reference Identification",
                  "description": "Reference information as defined for a particular Transaction Set or as specified by the Reference Identification Qualifier",
                  "elementIdentifier": "REF02"
                },
                "REF03": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "REF03 - Description",
                  "description": "A free-form description to clarify the related data elements and their content",
                  "elementIdentifier": "REF03"
                },
                "REF0401": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "REF0401 - Reference Identification Qualifier",
                  "description": "Code qualifying the Reference Identification",
                  "elementIdentifier": "REF0401"
                },
                "REF0402": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "REF0402 - Reference Identification",
                  "description": "Reference information as defined for a particular Transaction Set or as specified by the Reference Identification Qualifier",
                  "elementIdentifier": "REF0402"
                },
                "REF0403": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "REF0403 - Reference Identification Qualifier",
                  "description": "Code qualifying the Reference Identification",
                  "elementIdentifier": "REF0403"
                },
                "REF0404": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "REF0404 - Reference Identification",
                  "description": "Reference information as defined for a particular Transaction Set or as specified by the Reference Identification Qualifier",
                  "elementIdentifier": "REF0404"
                },
                "REF0405": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "REF0405 - Reference Identification Qualifier",
                  "description": "Code qualifying the Reference Identification",
                  "elementIdentifier": "REF0405"
                },
                "REF0406": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "REF0406 - Reference Identification",
                  "description": "Reference information as defined for a particular Transaction Set or as specified by the Reference Identification Qualifier",
                  "elementIdentifier": "REF0406"
                }
              }
            }
          },
          "YNQ": {
            "schemaType": "segmentArray",
            "type": "array",
            "items": {
              "schemaType": "segment",
              "title": "YNQ - Yes/No Question",
              "description": "To identify and answer yes and no questions, including the date, time, and comments further qualifying the condition",
              "segmentIdentifier": "YNQ",
              "type": "object",
              "minProperties": 1,
              "additionalProperties": false,
              "properties": {
                "YNQ01": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "YNQ01 - Condition Indicator",
                  "description": "Code indicating a condition",
                  "elementIdentifier": "YNQ01"
                },
                "YNQ02": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "YNQ02 - Yes/No Condition or Response Code",
                  "description": "Code indicating a Yes or No condition or response",
                  "elementIdentifier": "YNQ02"
                },
                "YNQ03": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "YNQ03 - Date Time Period Format Qualifier",
                  "description": "Code indicating the date format, time format, or date and time format",
                  "elementIdentifier": "YNQ03"
                },
                "YNQ04": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "YNQ04 - Date Time Period",
                  "description": "Expression of a date, a time, or range of dates, times or dates and times",
                  "elementIdentifier": "YNQ04"
                },
                "YNQ05": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "YNQ05 - Free-Form Message Text",
                  "description": "Free-form message text",
                  "elementIdentifier": "YNQ05"
                },
                "YNQ06": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "YNQ06 - Free-Form Message Text",
                  "description": "Free-form message text",
                  "elementIdentifier": "YNQ06"
                },
                "YNQ07": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "YNQ07 - Free-Form Message Text",
                  "description": "Free-form message text",
                  "elementIdentifier": "YNQ07"
                },
                "YNQ08": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "YNQ08 - Code List Qualifier Code",
                  "description": "Code identifying a specific industry code list",
                  "elementIdentifier": "YNQ08"
                },
                "YNQ09": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "YNQ09 - Industry Code",
                  "description": "Code indicating a code from a specific industry code list",
                  "elementIdentifier": "YNQ09"
                },
                "YNQ10": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "YNQ10 - Free-Form Message Text",
                  "description": "Free-form message text",
                  "elementIdentifier": "YNQ10"
                }
              }
            }
          },
          "PER": {
            "schemaType": "segmentArray",
            "type": "array",
            "items": {
              "schemaType": "segment",
              "title": "PER - Administrative Communications Contact",
              "description": "To identify a person or office to whom administrative communications should be directed",
              "segmentIdentifier": "PER",
              "type": "object",
              "minProperties": 1,
              "additionalProperties": false,
              "properties": {
                "PER01": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PER01 - Contact Function Code",
                  "description": "Code identifying the major duty or responsibility of the person or group named",
                  "elementIdentifier": "PER01"
                },
                "PER02": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PER02 - Name",
                  "description": "Free-form name",
                  "elementIdentifier": "PER02"
                },
                "PER03": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PER03 - Communication Number Qualifier",
                  "description": "Code identifying the type of communication number",
                  "elementIdentifier": "PER03"
                },
                "PER04": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PER04 - Communication Number",
                  "description": "Complete communications number including country or area code when applicable",
                  "elementIdentifier": "PER04"
                },
                "PER05": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PER05 - Communication Number Qualifier",
                  "description": "Code identifying the type of communication number",
                  "elementIdentifier": "PER05"
                },
                "PER06": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PER06 - Communication Number",
                  "description": "Complete communications number including country or area code when applicable",
                  "elementIdentifier": "PER06"
                },
                "PER07": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PER07 - Communication Number Qualifier",
                  "description": "Code identifying the type of communication number",
                  "elementIdentifier": "PER07"
                },
                "PER08": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PER08 - Communication Number",
                  "description": "Complete communications number including country or area code when applicable",
                  "elementIdentifier": "PER08"
                },
                "PER09": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PER09 - Contact Inquiry Reference",
                  "description": "Additional reference number or description to clarify a contact number",
                  "elementIdentifier": "PER09"
                }
              }
            }
          },
          "N1_loop": {
            "schemaType": "loopArray",
            "type": "array",
            "loopContents": "N1-N2-N3-N4-REF-PER-DMG",
            "minItems": 1,
            "items": {
              "schemaType": "loop",
              "type": "object",
              "minProperties": 1,
              "additionalProperties": false,
              "properties": {
                "N1": {
                  "schemaType": "segmentArray",
                  "type": "array",
                  "items": {
                    "schemaType": "segment",
                    "title": "N1 - Name",
                    "description": "To identify a party by type of organization, name, and code",
                    "segmentIdentifier": "N1",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "N101": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "N101 - Entity Identifier Code",
                        "description": "Code identifying an organizational entity, a physical location, property or an individual",
                        "elementIdentifier": "N101"
                      },
                      "N102": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "N102 - Name",
                        "description": "Free-form name",
                        "elementIdentifier": "N102"
                      },
                      "N103": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "N103 - Identification Code Qualifier",
                        "description": "Code designating the system/method of code structure used for Identification Code (67)",
                        "elementIdentifier": "N103"
                      },
                      "N104": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "N104 - Identification Code",
                        "description": "Code identifying a party or other code",
                        "elementIdentifier": "N104"
                      },
                      "N105": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "N105 - Entity Relationship Code",
                        "description": "Code describing entity relationship",
                        "elementIdentifier": "N105"
                      },
                      "N106": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "N106 - Entity Identifier Code",
                        "description": "Code identifying an organizational entity, a physical location, property or an individual",
                        "elementIdentifier": "N106"
                      }
                    }
                  }
                },
                "N2": {
                  "schemaType": "segmentArray",
                  "type": "array",
                  "items": {
                    "schemaType": "segment",
                    "title": "N2 - Additional Name Information",
                    "description": "To specify additional names or those longer than 35 characters in length",
                    "segmentIdentifier": "N2",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "N201": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "N201 - Name",
                        "description": "Free-form name",
                        "elementIdentifier": "N201"
                      },
                      "N202": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "N202 - Name",
                        "description": "Free-form name",
                        "elementIdentifier": "N202"
                      }
                    }
                  }
                },
                "N3": {
                  "schemaType": "segmentArray",
                  "type": "array",
                  "items": {
                    "schemaType": "segment",
                    "title": "N3 - Address Information",
                    "description": "To specify the location of the named party",
                    "segmentIdentifier": "N3",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "N301": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "N301 - Address Information",
                        "description": "Address information",
                        "elementIdentifier": "N301"
                      },
                      "N302": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "N302 - Address Information",
                        "description": "Address information",
                        "elementIdentifier": "N302"
                      }
                    }
                  }
                },
                "N4": {
                  "schemaType": "segmentArray",
                  "type": "array",
                  "items": {
                    "schemaType": "segment",
                    "title": "N4 - Geographic Location",
                    "description": "To specify the geographic place of the named party",
                    "segmentIdentifier": "N4",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "N401": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "N401 - City Name",
                        "description": "Free-form text for city name",
                        "elementIdentifier": "N401"
                      },
                      "N402": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "N402 - State or Province Code",
                        "description": "Code (Standard State/Province) as defined by appropriate government agency",
                        "elementIdentifier": "N402"
                      },
                      "N403": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "N403 - Postal Code",
                        "description": "Code defining international postal zone code excluding punctuation and blanks (zip code for United States)",
                        "elementIdentifier": "N403"
                      },
                      "N404": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "N404 - Country Code",
                        "description": "Code identifying the country",
                        "elementIdentifier": "N404"
                      },
                      "N405": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "N405 - Location Qualifier",
                        "description": "Code identifying type of location",
                        "elementIdentifier": "N405"
                      },
                      "N406": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "N406 - Location Identifier",
                        "description": "Code which identifies a specific location",
                        "elementIdentifier": "N406"
                      }
                    }
                  }
                },
                "REF": {
                  "schemaType": "segmentArray",
                  "type": "array",
                  "items": {
                    "schemaType": "segment",
                    "title": "REF - Reference Identification",
                    "description": "To specify identifying information",
                    "segmentIdentifier": "REF",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "REF01": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "REF01 - Reference Identification Qualifier",
                        "description": "Code qualifying the Reference Identification",
                        "elementIdentifier": "REF01"
                      },
                      "REF02": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "REF02 - Reference Identification",
                        "description": "Reference information as defined for a particular Transaction Set or as specified by the Reference Identification Qualifier",
                        "elementIdentifier": "REF02"
                      },
                      "REF03": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "REF03 - Description",
                        "description": "A free-form description to clarify the related data elements and their content",
                        "elementIdentifier": "REF03"
                      },
                      "REF0401": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "REF0401 - Reference Identification Qualifier",
                        "description": "Code qualifying the Reference Identification",
                        "elementIdentifier": "REF0401"
                      },
                      "REF0402": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "REF0402 - Reference Identification",
                        "description": "Reference information as defined for a particular Transaction Set or as specified by the Reference Identification Qualifier",
                        "elementIdentifier": "REF0402"
                      },
                      "REF0403": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "REF0403 - Reference Identification Qualifier",
                        "description": "Code qualifying the Reference Identification",
                        "elementIdentifier": "REF0403"
                      },
                      "REF0404": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "REF0404 - Reference Identification",
                        "description": "Reference information as defined for a particular Transaction Set or as specified by the Reference Identification Qualifier",
                        "elementIdentifier": "REF0404"
                      },
                      "REF0405": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "REF0405 - Reference Identification Qualifier",
                        "description": "Code qualifying the Reference Identification",
                        "elementIdentifier": "REF0405"
                      },
                      "REF0406": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "REF0406 - Reference Identification",
                        "description": "Reference information as defined for a particular Transaction Set or as specified by the Reference Identification Qualifier",
                        "elementIdentifier": "REF0406"
                      }
                    }
                  }
                },
                "PER": {
                  "schemaType": "segmentArray",
                  "type": "array",
                  "items": {
                    "schemaType": "segment",
                    "title": "PER - Administrative Communications Contact",
                    "description": "To identify a person or office to whom administrative communications should be directed",
                    "segmentIdentifier": "PER",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "PER01": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PER01 - Contact Function Code",
                        "description": "Code identifying the major duty or responsibility of the person or group named",
                        "elementIdentifier": "PER01"
                      },
                      "PER02": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PER02 - Name",
                        "description": "Free-form name",
                        "elementIdentifier": "PER02"
                      },
                      "PER03": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PER03 - Communication Number Qualifier",
                        "description": "Code identifying the type of communication number",
                        "elementIdentifier": "PER03"
                      },
                      "PER04": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PER04 - Communication Number",
                        "description": "Complete communications number including country or area code when applicable",
                        "elementIdentifier": "PER04"
                      },
                      "PER05": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PER05 - Communication Number Qualifier",
                        "description": "Code identifying the type of communication number",
                        "elementIdentifier": "PER05"
                      },
                      "PER06": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PER06 - Communication Number",
                        "description": "Complete communications number including country or area code when applicable",
                        "elementIdentifier": "PER06"
                      },
                      "PER07": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PER07 - Communication Number Qualifier",
                        "description": "Code identifying the type of communication number",
                        "elementIdentifier": "PER07"
                      },
                      "PER08": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PER08 - Communication Number",
                        "description": "Complete communications number including country or area code when applicable",
                        "elementIdentifier": "PER08"
                      },
                      "PER09": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PER09 - Contact Inquiry Reference",
                        "description": "Additional reference number or description to clarify a contact number",
                        "elementIdentifier": "PER09"
                      }
                    }
                  }
                },
                "DMG": {
                  "schemaType": "segmentArray",
                  "type": "array",
                  "items": {
                    "schemaType": "segment",
                    "title": "DMG - Demographic Information",
                    "description": "To supply demographic information",
                    "segmentIdentifier": "DMG",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "DMG01": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "DMG01 - Date Time Period Format Qualifier",
                        "description": "Code indicating the date format, time format, or date and time format",
                        "elementIdentifier": "DMG01"
                      },
                      "DMG02": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "DMG02 - Date Time Period",
                        "description": "Expression of a date, a time, or range of dates, times or dates and times",
                        "elementIdentifier": "DMG02"
                      },
                      "DMG03": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "DMG03 - Gender Code",
                        "description": "Code indicating the sex of the individual",
                        "elementIdentifier": "DMG03"
                      },
                      "DMG04": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "DMG04 - Marital Status Code",
                        "description": "Code defining the marital status of a person",
                        "elementIdentifier": "DMG04"
                      },
                      "DMG05": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "DMG05 - Race or Ethnicity Code",
                        "description": "Code indicating the racial or ethnic background of a person; it is normally self-reported; Under certain circumstances this information is collected for United States Government statistical purposes",
                        "elementIdentifier": "DMG05"
                      },
                      "DMG06": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "DMG06 - Citizenship Status Code",
                        "description": "Code indicating citizenship status",
                        "elementIdentifier": "DMG06"
                      },
                      "DMG07": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "DMG07 - Country Code",
                        "description": "Code identifying the country",
                        "elementIdentifier": "DMG07"
                      },
                      "DMG08": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "DMG08 - Basis of Verification Code",
                        "description": "Code indicating the basis of verification",
                        "elementIdentifier": "DMG08"
                      },
                      "DMG09": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "DMG09 - Quantity",
                        "description": "Numeric value of quantity",
                        "elementIdentifier": "DMG09"
                      }
                    }
                  }
                }
              }
            }
          },
          "ITD": {
            "schemaType": "segmentArray",
            "type": "array",
            "items": {
              "schemaType": "segment",
              "title": "ITD - Terms of Sale/Deferred Terms of Sale",
              "description": "To specify terms of sale",
              "segmentIdentifier": "ITD",
              "type": "object",
              "minProperties": 1,
              "additionalProperties": false,
              "properties": {
                "ITD01": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "ITD01 - Terms Type Code",
                  "description": "Code identifying type of payment terms",
                  "elementIdentifier": "ITD01"
                },
                "ITD02": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "ITD02 - Terms Basis Date Code",
                  "description": "Code identifying the beginning of the terms period",
                  "elementIdentifier": "ITD02"
                },
                "ITD03": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "ITD03 - Terms Discount Percent",
                  "description": "Terms discount percentage, expressed as a percent, available to the purchaser if an invoice is paid on or before the Terms Discount Due Date",
                  "elementIdentifier": "ITD03"
                },
                "ITD04": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "ITD04 - Terms Discount Due Date",
                  "description": "Date payment is due if discount is to be earned expressed in format CCYYMMDD",
                  "elementIdentifier": "ITD04"
                },
                "ITD05": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "ITD05 - Terms Discount Days Due",
                  "description": "Number of days in the terms discount period by which payment is due if terms discount is earned",
                  "elementIdentifier": "ITD05"
                },
                "ITD06": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "ITD06 - Terms Net Due Date",
                  "description": "Date when total invoice amount becomes due expressed in format CCYYMMDD",
                  "elementIdentifier": "ITD06"
                },
                "ITD07": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "ITD07 - Terms Net Days",
                  "description": "Number of days until total invoice amount is due (discount not applicable)",
                  "elementIdentifier": "ITD07"
                },
                "ITD08": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "ITD08 - Terms Discount Amount",
                  "description": "Total amount of terms discount",
                  "elementIdentifier": "ITD08"
                },
                "ITD09": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "ITD09 - Terms Deferred Due Date",
                  "description": "Date deferred payment or percent of invoice payable is due expressed in format CCYYMMDD",
                  "elementIdentifier": "ITD09"
                },
                "ITD10": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "ITD10 - Deferred Amount Due",
                  "description": "Deferred amount due for payment",
                  "elementIdentifier": "ITD10"
                },
                "ITD11": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "ITD11 - Percent of Invoice Payable",
                  "description": "Amount of invoice payable expressed in percent",
                  "elementIdentifier": "ITD11"
                },
                "ITD12": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "ITD12 - Description",
                  "description": "A free-form description to clarify the related data elements and their content",
                  "elementIdentifier": "ITD12"
                },
                "ITD13": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "ITD13 - Day of Month",
                  "description": "The numeric value of the day of the month between 1 and the maximum day of the month being referenced",
                  "elementIdentifier": "ITD13"
                },
                "ITD14": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "ITD14 - Payment Method Code",
                  "description": "Code identifying type of payment procedures",
                  "elementIdentifier": "ITD14"
                },
                "ITD15": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "ITD15 - Percent",
                  "description": "Percentage expressed as a decimal",
                  "elementIdentifier": "ITD15"
                }
              }
            }
          },
          "DTM": {
            "schemaType": "segmentArray",
            "type": "array",
            "items": {
              "schemaType": "segment",
              "title": "DTM - Date/Time Reference",
              "description": "To specify pertinent dates and times",
              "segmentIdentifier": "DTM",
              "type": "object",
              "minProperties": 1,
              "additionalProperties": false,
              "properties": {
                "DTM01": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "DTM01 - Date/Time Qualifier",
                  "description": "Code specifying type of date or time, or both date and time",
                  "elementIdentifier": "DTM01"
                },
                "DTM02": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "DTM02 - Date",
                  "description": "Date expressed as CCYYMMDD",
                  "elementIdentifier": "DTM02"
                },
                "DTM03": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "DTM03 - Time",
                  "description": "Time expressed in 24-hour clock time as follows: HHMM, or HHMMSS, or HHMMSSD, or HHMMSSDD, where H = hours (00-23), M = minutes (00-59), S = integer seconds (00-59) and DD = decimal seconds; decimal seconds are expressed as follows: D = tenths (0-9) and DD = hundredths (00-99)",
                  "elementIdentifier": "DTM03"
                },
                "DTM04": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "DTM04 - Time Code",
                  "description": "Code identifying the time. In accordance with International Standards Organization standard 8601, time can be specified by a + or - and an indication in hours in relation to Universal Time Coordinate (UTC) time; since + is a restricted character, + and - are substituted by P and M in the codes that follow",
                  "elementIdentifier": "DTM04"
                },
                "DTM05": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "DTM05 - Date Time Period Format Qualifier",
                  "description": "Code indicating the date format, time format, or date and time format",
                  "elementIdentifier": "DTM05"
                },
                "DTM06": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "DTM06 - Date Time Period",
                  "description": "Expression of a date, a time, or range of dates, times or dates and times",
                  "elementIdentifier": "DTM06"
                }
              }
            }
          },
          "FOB": {
            "schemaType": "segmentArray",
            "type": "array",
            "items": {
              "schemaType": "segment",
              "title": "FOB - F.O.B. Related Instructions",
              "description": "To specify transportation instructions relating to shipment",
              "segmentIdentifier": "FOB",
              "type": "object",
              "minProperties": 1,
              "additionalProperties": false,
              "properties": {
                "FOB01": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "FOB01 - Shipment Method of Payment",
                  "description": "Code identifying payment terms for transportation charges",
                  "elementIdentifier": "FOB01"
                },
                "FOB02": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "FOB02 - Location Qualifier",
                  "description": "Code identifying type of location",
                  "elementIdentifier": "FOB02"
                },
                "FOB03": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "FOB03 - Description",
                  "description": "A free-form description to clarify the related data elements and their content",
                  "elementIdentifier": "FOB03"
                },
                "FOB04": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "FOB04 - Transportation Terms Qualifier Code",
                  "description": "Code identifying the source of the transportation terms",
                  "elementIdentifier": "FOB04"
                },
                "FOB05": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "FOB05 - Transportation Terms Code",
                  "description": "Code identifying the trade terms which apply to the shipment transportation responsibility",
                  "elementIdentifier": "FOB05"
                },
                "FOB06": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "FOB06 - Location Qualifier",
                  "description": "Code identifying type of location",
                  "elementIdentifier": "FOB06"
                },
                "FOB07": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "FOB07 - Description",
                  "description": "A free-form description to clarify the related data elements and their content",
                  "elementIdentifier": "FOB07"
                },
                "FOB08": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "FOB08 - Risk of Loss Code",
                  "description": "Code specifying where responsibility for risk of loss passes",
                  "elementIdentifier": "FOB08"
                },
                "FOB09": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "FOB09 - Description",
                  "description": "A free-form description to clarify the related data elements and their content",
                  "elementIdentifier": "FOB09"
                }
              }
            }
          },
          "PID": {
            "schemaType": "segmentArray",
            "type": "array",
            "items": {
              "schemaType": "segment",
              "title": "PID - Product/Item Description",
              "description": "To describe a product or process in coded or free-form format",
              "segmentIdentifier": "PID",
              "type": "object",
              "minProperties": 1,
              "additionalProperties": false,
              "properties": {
                "PID01": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PID01 - Item Description Type",
                  "description": "Code indicating the format of a description",
                  "elementIdentifier": "PID01"
                },
                "PID02": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PID02 - Product/Process Characteristic Code",
                  "description": "Code identifying the general class of a product or process characteristic",
                  "elementIdentifier": "PID02"
                },
                "PID03": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PID03 - Agency Qualifier Code",
                  "description": "Code identifying the agency assigning the code values",
                  "elementIdentifier": "PID03"
                },
                "PID04": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PID04 - Product Description Code",
                  "description": "A code from an industry code list which provides specific data about a product characteristic",
                  "elementIdentifier": "PID04"
                },
                "PID05": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PID05 - Description",
                  "description": "A free-form description to clarify the related data elements and their content",
                  "elementIdentifier": "PID05"
                },
                "PID06": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PID06 - Surface/Layer/Position Code",
                  "description": "Code indicating the product surface, layer or position that is being described",
                  "elementIdentifier": "PID06"
                },
                "PID07": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PID07 - Source Subqualifier",
                  "description": "A reference that indicates the table or text maintained by the Source Qualifier",
                  "elementIdentifier": "PID07"
                },
                "PID08": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PID08 - Yes/No Condition or Response Code",
                  "description": "Code indicating a Yes or No condition or response",
                  "elementIdentifier": "PID08"
                },
                "PID09": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PID09 - Language Code",
                  "description": "Code designating the language used in text, from a standard code list maintained by the International Standards Organization (ISO 639)",
                  "elementIdentifier": "PID09"
                }
              }
            }
          },
          "MEA": {
            "schemaType": "segmentArray",
            "type": "array",
            "items": {
              "schemaType": "segment",
              "title": "MEA - Measurements",
              "description": "To specify physical measurements or counts, including dimensions, tolerances, variances, and weights(See Figures Appendix for example of use of C001)",
              "segmentIdentifier": "MEA",
              "type": "object",
              "minProperties": 1,
              "additionalProperties": false,
              "properties": {
                "MEA01": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "MEA01 - Measurement Reference ID Code",
                  "description": "Code identifying the broad category to which a measurement applies",
                  "elementIdentifier": "MEA01"
                },
                "MEA02": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "MEA02 - Measurement Qualifier",
                  "description": "Code identifying a specific product or process characteristic to which a measurement applies",
                  "elementIdentifier": "MEA02"
                },
                "MEA03": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "MEA03 - Measurement Value",
                  "description": "The value of the measurement",
                  "elementIdentifier": "MEA03"
                },
                "MEA0401": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "MEA0401 - Unit or Basis for Measurement Code",
                  "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                  "elementIdentifier": "MEA0401"
                },
                "MEA0402": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "MEA0402 - Exponent",
                  "description": "Power to which a unit is raised",
                  "elementIdentifier": "MEA0402"
                },
                "MEA0403": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "MEA0403 - Multiplier",
                  "description": "Value to be used as a multiplier to obtain a new value",
                  "elementIdentifier": "MEA0403"
                },
                "MEA0404": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "MEA0404 - Unit or Basis for Measurement Code",
                  "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                  "elementIdentifier": "MEA0404"
                },
                "MEA0405": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "MEA0405 - Exponent",
                  "description": "Power to which a unit is raised",
                  "elementIdentifier": "MEA0405"
                },
                "MEA0406": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "MEA0406 - Multiplier",
                  "description": "Value to be used as a multiplier to obtain a new value",
                  "elementIdentifier": "MEA0406"
                },
                "MEA0407": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "MEA0407 - Unit or Basis for Measurement Code",
                  "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                  "elementIdentifier": "MEA0407"
                },
                "MEA0408": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "MEA0408 - Exponent",
                  "description": "Power to which a unit is raised",
                  "elementIdentifier": "MEA0408"
                },
                "MEA0409": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "MEA0409 - Multiplier",
                  "description": "Value to be used as a multiplier to obtain a new value",
                  "elementIdentifier": "MEA0409"
                },
                "MEA0410": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "MEA0410 - Unit or Basis for Measurement Code",
                  "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                  "elementIdentifier": "MEA0410"
                },
                "MEA0411": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "MEA0411 - Exponent",
                  "description": "Power to which a unit is raised",
                  "elementIdentifier": "MEA0411"
                },
                "MEA0412": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "MEA0412 - Multiplier",
                  "description": "Value to be used as a multiplier to obtain a new value",
                  "elementIdentifier": "MEA0412"
                },
                "MEA0413": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "MEA0413 - Unit or Basis for Measurement Code",
                  "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                  "elementIdentifier": "MEA0413"
                },
                "MEA0414": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "MEA0414 - Exponent",
                  "description": "Power to which a unit is raised",
                  "elementIdentifier": "MEA0414"
                },
                "MEA0415": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "MEA0415 - Multiplier",
                  "description": "Value to be used as a multiplier to obtain a new value",
                  "elementIdentifier": "MEA0415"
                },
                "MEA05": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "MEA05 - Range Minimum",
                  "description": "The value specifying the minimum of the measurement range",
                  "elementIdentifier": "MEA05"
                },
                "MEA06": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "MEA06 - Range Maximum",
                  "description": "The value specifying the maximum of the measurement range",
                  "elementIdentifier": "MEA06"
                },
                "MEA07": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "MEA07 - Measurement Significance Code",
                  "description": "Code used to benchmark, qualify or further define a measurement value",
                  "elementIdentifier": "MEA07"
                },
                "MEA08": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "MEA08 - Measurement Attribute Code",
                  "description": "Code used to express an attribute response when a numeric measurement value cannot be determined",
                  "elementIdentifier": "MEA08"
                },
                "MEA09": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "MEA09 - Surface/Layer/Position Code",
                  "description": "Code indicating the product surface, layer or position that is being described",
                  "elementIdentifier": "MEA09"
                },
                "MEA10": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "MEA10 - Measurement Method or Device",
                  "description": "The method or device used to record the measurement",
                  "elementIdentifier": "MEA10"
                }
              }
            }
          },
          "PWK": {
            "schemaType": "segmentArray",
            "type": "array",
            "items": {
              "schemaType": "segment",
              "title": "PWK - Paperwork",
              "description": "To identify the type or transmission or both of paperwork or supporting information",
              "segmentIdentifier": "PWK",
              "type": "object",
              "minProperties": 1,
              "additionalProperties": false,
              "properties": {
                "PWK01": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PWK01 - Report Type Code",
                  "description": "Code indicating the title or contents of a document, report or supporting item",
                  "elementIdentifier": "PWK01"
                },
                "PWK02": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PWK02 - Report Transmission Code",
                  "description": "Code defining timing, transmission method or format by which reports are to be sent",
                  "elementIdentifier": "PWK02"
                },
                "PWK03": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PWK03 - Report Copies Needed",
                  "description": "The number of copies of a report that should be sent to the addressee",
                  "elementIdentifier": "PWK03"
                },
                "PWK04": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PWK04 - Entity Identifier Code",
                  "description": "Code identifying an organizational entity, a physical location, property or an individual",
                  "elementIdentifier": "PWK04"
                },
                "PWK05": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PWK05 - Identification Code Qualifier",
                  "description": "Code designating the system/method of code structure used for Identification Code (67)",
                  "elementIdentifier": "PWK05"
                },
                "PWK06": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PWK06 - Identification Code",
                  "description": "Code identifying a party or other code",
                  "elementIdentifier": "PWK06"
                },
                "PWK07": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PWK07 - Description",
                  "description": "A free-form description to clarify the related data elements and their content",
                  "elementIdentifier": "PWK07"
                },
                "PWK0801": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PWK0801 - Paperwork/Report Action Code",
                  "description": "Code specifying how the paperwork or report that is identified in the PWK segment relates to the transaction set or to identify the action that is required",
                  "elementIdentifier": "PWK0801"
                },
                "PWK0802": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PWK0802 - Paperwork/Report Action Code",
                  "description": "Code specifying how the paperwork or report that is identified in the PWK segment relates to the transaction set or to identify the action that is required",
                  "elementIdentifier": "PWK0802"
                },
                "PWK0803": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PWK0803 - Paperwork/Report Action Code",
                  "description": "Code specifying how the paperwork or report that is identified in the PWK segment relates to the transaction set or to identify the action that is required",
                  "elementIdentifier": "PWK0803"
                },
                "PWK0804": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PWK0804 - Paperwork/Report Action Code",
                  "description": "Code specifying how the paperwork or report that is identified in the PWK segment relates to the transaction set or to identify the action that is required",
                  "elementIdentifier": "PWK0804"
                },
                "PWK0805": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PWK0805 - Paperwork/Report Action Code",
                  "description": "Code specifying how the paperwork or report that is identified in the PWK segment relates to the transaction set or to identify the action that is required",
                  "elementIdentifier": "PWK0805"
                },
                "PWK09": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PWK09 - Request Category Code",
                  "description": "Code indicating a type of request",
                  "elementIdentifier": "PWK09"
                }
              }
            }
          },
          "PKG": {
            "schemaType": "segmentArray",
            "type": "array",
            "items": {
              "schemaType": "segment",
              "title": "PKG - Marking, Packaging, Loading",
              "description": "To describe marking, packaging, loading, and unloading requirements",
              "segmentIdentifier": "PKG",
              "type": "object",
              "minProperties": 1,
              "additionalProperties": false,
              "properties": {
                "PKG01": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PKG01 - Item Description Type",
                  "description": "Code indicating the format of a description",
                  "elementIdentifier": "PKG01"
                },
                "PKG02": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PKG02 - Packaging Characteristic Code",
                  "description": "Code specifying the marking, packaging, loading and related characteristics being described",
                  "elementIdentifier": "PKG02"
                },
                "PKG03": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PKG03 - Agency Qualifier Code",
                  "description": "Code identifying the agency assigning the code values",
                  "elementIdentifier": "PKG03"
                },
                "PKG04": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PKG04 - Packaging Description Code",
                  "description": "A code from an industry code list which provides specific data about the marking, packaging or loading and unloading of a product",
                  "elementIdentifier": "PKG04"
                },
                "PKG05": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PKG05 - Description",
                  "description": "A free-form description to clarify the related data elements and their content",
                  "elementIdentifier": "PKG05"
                },
                "PKG06": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PKG06 - Unit Load Option Code",
                  "description": "Code identifying loading or unloading a shipment",
                  "elementIdentifier": "PKG06"
                }
              }
            }
          },
          "L7": {
            "schemaType": "segmentArray",
            "type": "array",
            "items": {
              "schemaType": "segment",
              "title": "L7 - Tariff Reference",
              "description": "To reference details of the tariff used to arrive at applicable rates or charge",
              "segmentIdentifier": "L7",
              "type": "object",
              "minProperties": 1,
              "additionalProperties": false,
              "properties": {
                "L701": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "L701 - Lading Line Item Number",
                  "description": "Sequential line number for a lading item",
                  "elementIdentifier": "L701"
                },
                "L702": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "L702 - Tariff Agency Code",
                  "description": "Code defining the tariff bureau or tariff publishing agent that governs the rates applied to this shipment",
                  "elementIdentifier": "L702"
                },
                "L703": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "L703 - Tariff Number",
                  "description": "Standard tariff number for the tariff which governs the rates applied to the commodity item(s)",
                  "elementIdentifier": "L703"
                },
                "L704": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "L704 - Tariff Section",
                  "description": "Number used as an extension of the basic tariff number to identify the rates published within specific sections of the tariff",
                  "elementIdentifier": "L704"
                },
                "L705": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "L705 - Tariff Item Number",
                  "description": "Number assigned in the tariff to specific rate or group of rates that applies to one or more items in the shipment",
                  "elementIdentifier": "L705"
                },
                "L706": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "L706 - Tariff Item Part",
                  "description": "Number assigned to subsection of a specific tariff item (arbitrary)",
                  "elementIdentifier": "L706"
                },
                "L707": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "L707 - Freight Class Code",
                  "description": "Code indicating generalized classification that applies to one or more items in the shipment, i.e., class 70, 77.5, etc.",
                  "elementIdentifier": "L707"
                },
                "L708": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "L708 - Tariff Supplement Identifier",
                  "description": "Identifier for the tariff supplement which contains the rate used",
                  "elementIdentifier": "L708"
                },
                "L709": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "L709 - Ex Parte",
                  "description": "Level of rates as published in the tariff",
                  "elementIdentifier": "L709"
                },
                "L710": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "L710 - Date",
                  "description": "Date expressed as CCYYMMDD",
                  "elementIdentifier": "L710"
                },
                "L711": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "L711 - Rate Basis Number",
                  "description": "The (mileage) factor published for rating purposes in the appropriate tariff",
                  "elementIdentifier": "L711"
                },
                "L712": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "L712 - Tariff Column",
                  "description": "A tariff commodity classification that is used, as a means of control, for grouping of commodities in tariff applications",
                  "elementIdentifier": "L712"
                },
                "L713": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "L713 - Tariff Distance",
                  "description": "Distance on which the rate for a shipment is based",
                  "elementIdentifier": "L713"
                },
                "L714": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "L714 - Distance Qualifier",
                  "description": "Code identifying the distance unit",
                  "elementIdentifier": "L714"
                },
                "L715": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "L715 - City Name",
                  "description": "Free-form text for city name",
                  "elementIdentifier": "L715"
                },
                "L716": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "L716 - State or Province Code",
                  "description": "Code (Standard State/Province) as defined by appropriate government agency",
                  "elementIdentifier": "L716"
                }
              }
            }
          },
          "BAL": {
            "schemaType": "segmentArray",
            "type": "array",
            "items": {
              "schemaType": "segment",
              "title": "BAL - Balance Detail",
              "description": "To identify the specific monetary balances associated with a particular account",
              "segmentIdentifier": "BAL",
              "type": "object",
              "minProperties": 1,
              "additionalProperties": false,
              "properties": {
                "BAL01": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "BAL01 - Balance Type Code",
                  "description": "Code indicating the type of balance",
                  "elementIdentifier": "BAL01"
                },
                "BAL02": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "BAL02 - Amount Qualifier Code",
                  "description": "Code to qualify amount",
                  "elementIdentifier": "BAL02"
                },
                "BAL03": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "BAL03 - Monetary Amount",
                  "description": "Monetary amount",
                  "elementIdentifier": "BAL03"
                }
              }
            }
          },
          "INC": {
            "schemaType": "segmentArray",
            "type": "array",
            "items": {
              "schemaType": "segment",
              "title": "INC - Installment Information",
              "description": "To specify installment billing arrangement",
              "segmentIdentifier": "INC",
              "type": "object",
              "minProperties": 1,
              "additionalProperties": false,
              "properties": {
                "INC01": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "INC01 - Terms Type Code",
                  "description": "Code identifying type of payment terms",
                  "elementIdentifier": "INC01"
                },
                "INC0201": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "INC0201 - Unit or Basis for Measurement Code",
                  "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                  "elementIdentifier": "INC0201"
                },
                "INC0202": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "INC0202 - Exponent",
                  "description": "Power to which a unit is raised",
                  "elementIdentifier": "INC0202"
                },
                "INC0203": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "INC0203 - Multiplier",
                  "description": "Value to be used as a multiplier to obtain a new value",
                  "elementIdentifier": "INC0203"
                },
                "INC0204": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "INC0204 - Unit or Basis for Measurement Code",
                  "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                  "elementIdentifier": "INC0204"
                },
                "INC0205": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "INC0205 - Exponent",
                  "description": "Power to which a unit is raised",
                  "elementIdentifier": "INC0205"
                },
                "INC0206": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "INC0206 - Multiplier",
                  "description": "Value to be used as a multiplier to obtain a new value",
                  "elementIdentifier": "INC0206"
                },
                "INC0207": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "INC0207 - Unit or Basis for Measurement Code",
                  "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                  "elementIdentifier": "INC0207"
                },
                "INC0208": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "INC0208 - Exponent",
                  "description": "Power to which a unit is raised",
                  "elementIdentifier": "INC0208"
                },
                "INC0209": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "INC0209 - Multiplier",
                  "description": "Value to be used as a multiplier to obtain a new value",
                  "elementIdentifier": "INC0209"
                },
                "INC0210": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "INC0210 - Unit or Basis for Measurement Code",
                  "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                  "elementIdentifier": "INC0210"
                },
                "INC0211": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "INC0211 - Exponent",
                  "description": "Power to which a unit is raised",
                  "elementIdentifier": "INC0211"
                },
                "INC0212": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "INC0212 - Multiplier",
                  "description": "Value to be used as a multiplier to obtain a new value",
                  "elementIdentifier": "INC0212"
                },
                "INC0213": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "INC0213 - Unit or Basis for Measurement Code",
                  "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                  "elementIdentifier": "INC0213"
                },
                "INC0214": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "INC0214 - Exponent",
                  "description": "Power to which a unit is raised",
                  "elementIdentifier": "INC0214"
                },
                "INC0215": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "INC0215 - Multiplier",
                  "description": "Value to be used as a multiplier to obtain a new value",
                  "elementIdentifier": "INC0215"
                },
                "INC03": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "INC03 - Quantity",
                  "description": "Numeric value of quantity",
                  "elementIdentifier": "INC03"
                },
                "INC04": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "INC04 - Quantity",
                  "description": "Numeric value of quantity",
                  "elementIdentifier": "INC04"
                },
                "INC05": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "INC05 - Monetary Amount",
                  "description": "Monetary amount",
                  "elementIdentifier": "INC05"
                }
              }
            }
          },
          "PAM": {
            "schemaType": "segmentArray",
            "type": "array",
            "items": {
              "schemaType": "segment",
              "title": "PAM - Period Amount",
              "description": "To indicate a quantity, and/or amount for an identified period",
              "segmentIdentifier": "PAM",
              "type": "object",
              "minProperties": 1,
              "additionalProperties": false,
              "properties": {
                "PAM01": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PAM01 - Quantity Qualifier",
                  "description": "Code specifying the type of quantity",
                  "elementIdentifier": "PAM01"
                },
                "PAM02": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PAM02 - Quantity",
                  "description": "Numeric value of quantity",
                  "elementIdentifier": "PAM02"
                },
                "PAM0301": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PAM0301 - Unit or Basis for Measurement Code",
                  "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                  "elementIdentifier": "PAM0301"
                },
                "PAM0302": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PAM0302 - Exponent",
                  "description": "Power to which a unit is raised",
                  "elementIdentifier": "PAM0302"
                },
                "PAM0303": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PAM0303 - Multiplier",
                  "description": "Value to be used as a multiplier to obtain a new value",
                  "elementIdentifier": "PAM0303"
                },
                "PAM0304": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PAM0304 - Unit or Basis for Measurement Code",
                  "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                  "elementIdentifier": "PAM0304"
                },
                "PAM0305": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PAM0305 - Exponent",
                  "description": "Power to which a unit is raised",
                  "elementIdentifier": "PAM0305"
                },
                "PAM0306": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PAM0306 - Multiplier",
                  "description": "Value to be used as a multiplier to obtain a new value",
                  "elementIdentifier": "PAM0306"
                },
                "PAM0307": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PAM0307 - Unit or Basis for Measurement Code",
                  "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                  "elementIdentifier": "PAM0307"
                },
                "PAM0308": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PAM0308 - Exponent",
                  "description": "Power to which a unit is raised",
                  "elementIdentifier": "PAM0308"
                },
                "PAM0309": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PAM0309 - Multiplier",
                  "description": "Value to be used as a multiplier to obtain a new value",
                  "elementIdentifier": "PAM0309"
                },
                "PAM0310": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PAM0310 - Unit or Basis for Measurement Code",
                  "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                  "elementIdentifier": "PAM0310"
                },
                "PAM0311": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PAM0311 - Exponent",
                  "description": "Power to which a unit is raised",
                  "elementIdentifier": "PAM0311"
                },
                "PAM0312": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PAM0312 - Multiplier",
                  "description": "Value to be used as a multiplier to obtain a new value",
                  "elementIdentifier": "PAM0312"
                },
                "PAM0313": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PAM0313 - Unit or Basis for Measurement Code",
                  "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                  "elementIdentifier": "PAM0313"
                },
                "PAM0314": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PAM0314 - Exponent",
                  "description": "Power to which a unit is raised",
                  "elementIdentifier": "PAM0314"
                },
                "PAM0315": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PAM0315 - Multiplier",
                  "description": "Value to be used as a multiplier to obtain a new value",
                  "elementIdentifier": "PAM0315"
                },
                "PAM04": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PAM04 - Amount Qualifier Code",
                  "description": "Code to qualify amount",
                  "elementIdentifier": "PAM04"
                },
                "PAM05": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PAM05 - Monetary Amount",
                  "description": "Monetary amount",
                  "elementIdentifier": "PAM05"
                },
                "PAM06": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PAM06 - Unit of Time Period or Interval",
                  "description": "Code indicating the time period or interval",
                  "elementIdentifier": "PAM06"
                },
                "PAM07": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PAM07 - Date/Time Qualifier",
                  "description": "Code specifying type of date or time, or both date and time",
                  "elementIdentifier": "PAM07"
                },
                "PAM08": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PAM08 - Date",
                  "description": "Date expressed as CCYYMMDD",
                  "elementIdentifier": "PAM08"
                },
                "PAM09": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PAM09 - Time",
                  "description": "Time expressed in 24-hour clock time as follows: HHMM, or HHMMSS, or HHMMSSD, or HHMMSSDD, where H = hours (00-23), M = minutes (00-59), S = integer seconds (00-59) and DD = decimal seconds; decimal seconds are expressed as follows: D = tenths (0-9) and DD = hundredths (00-99)",
                  "elementIdentifier": "PAM09"
                },
                "PAM10": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PAM10 - Date/Time Qualifier",
                  "description": "Code specifying type of date or time, or both date and time",
                  "elementIdentifier": "PAM10"
                },
                "PAM11": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PAM11 - Date",
                  "description": "Date expressed as CCYYMMDD",
                  "elementIdentifier": "PAM11"
                },
                "PAM12": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PAM12 - Time",
                  "description": "Time expressed in 24-hour clock time as follows: HHMM, or HHMMSS, or HHMMSSD, or HHMMSSDD, where H = hours (00-23), M = minutes (00-59), S = integer seconds (00-59) and DD = decimal seconds; decimal seconds are expressed as follows: D = tenths (0-9) and DD = hundredths (00-99)",
                  "elementIdentifier": "PAM12"
                },
                "PAM13": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PAM13 - Percent Qualifier",
                  "description": "Code to qualify percent",
                  "elementIdentifier": "PAM13"
                },
                "PAM14": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PAM14 - Percent",
                  "description": "Percentage expressed as a decimal",
                  "elementIdentifier": "PAM14"
                },
                "PAM15": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "PAM15 - Yes/No Condition or Response Code",
                  "description": "Code indicating a Yes or No condition or response",
                  "elementIdentifier": "PAM15"
                }
              }
            }
          },
          "LM_loop": {
            "schemaType": "loopArray",
            "type": "array",
            "loopContents": "LM-LQ",
            "minItems": 1,
            "items": {
              "schemaType": "loop",
              "type": "object",
              "minProperties": 1,
              "additionalProperties": false,
              "properties": {
                "LM": {
                  "schemaType": "segmentArray",
                  "type": "array",
                  "items": {
                    "schemaType": "segment",
                    "title": "LM - Code Source Information",
                    "description": "To transmit standard code list identification information",
                    "segmentIdentifier": "LM",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "LM01": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "LM01 - Agency Qualifier Code",
                        "description": "Code identifying the agency assigning the code values",
                        "elementIdentifier": "LM01"
                      },
                      "LM02": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "LM02 - Source Subqualifier",
                        "description": "A reference that indicates the table or text maintained by the Source Qualifier",
                        "elementIdentifier": "LM02"
                      }
                    }
                  }
                },
                "LQ": {
                  "schemaType": "segmentArray",
                  "type": "array",
                  "items": {
                    "schemaType": "segment",
                    "title": "LQ - Industry Code",
                    "description": "Code to transmit standard industry codes",
                    "segmentIdentifier": "LQ",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "LQ01": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "LQ01 - Code List Qualifier Code",
                        "description": "Code identifying a specific industry code list",
                        "elementIdentifier": "LQ01"
                      },
                      "LQ02": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "LQ02 - Industry Code",
                        "description": "Code indicating a code from a specific industry code list",
                        "elementIdentifier": "LQ02"
                      }
                    }
                  }
                }
              }
            }
          },
          "N9_loop": {
            "schemaType": "loopArray",
            "type": "array",
            "loopContents": "N9-MSG",
            "minItems": 1,
            "items": {
              "schemaType": "loop",
              "type": "object",
              "minProperties": 1,
              "additionalProperties": false,
              "properties": {
                "N9": {
                  "schemaType": "segmentArray",
                  "type": "array",
                  "items": {
                    "schemaType": "segment",
                    "title": "N9 - Reference Identification",
                    "description": "To transmit identifying information as specified by the Reference Identification Qualifier",
                    "segmentIdentifier": "N9",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "N901": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "N901 - Reference Identification Qualifier",
                        "description": "Code qualifying the Reference Identification",
                        "elementIdentifier": "N901"
                      },
                      "N902": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "N902 - Reference Identification",
                        "description": "Reference information as defined for a particular Transaction Set or as specified by the Reference Identification Qualifier",
                        "elementIdentifier": "N902"
                      },
                      "N903": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "N903 - Free-form Description",
                        "description": "Free-form descriptive text",
                        "elementIdentifier": "N903"
                      },
                      "N904": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "N904 - Date",
                        "description": "Date expressed as CCYYMMDD",
                        "elementIdentifier": "N904"
                      },
                      "N905": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "N905 - Time",
                        "description": "Time expressed in 24-hour clock time as follows: HHMM, or HHMMSS, or HHMMSSD, or HHMMSSDD, where H = hours (00-23), M = minutes (00-59), S = integer seconds (00-59) and DD = decimal seconds; decimal seconds are expressed as follows: D = tenths (0-9) and DD = hundredths (00-99)",
                        "elementIdentifier": "N905"
                      },
                      "N906": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "N906 - Time Code",
                        "description": "Code identifying the time. In accordance with International Standards Organization standard 8601, time can be specified by a + or - and an indication in hours in relation to Universal Time Coordinate (UTC) time; since + is a restricted character, + and - are substituted by P and M in the codes that follow",
                        "elementIdentifier": "N906"
                      },
                      "N90701": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "N90701 - Reference Identification Qualifier",
                        "description": "Code qualifying the Reference Identification",
                        "elementIdentifier": "N90701"
                      },
                      "N90702": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "N90702 - Reference Identification",
                        "description": "Reference information as defined for a particular Transaction Set or as specified by the Reference Identification Qualifier",
                        "elementIdentifier": "N90702"
                      },
                      "N90703": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "N90703 - Reference Identification Qualifier",
                        "description": "Code qualifying the Reference Identification",
                        "elementIdentifier": "N90703"
                      },
                      "N90704": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "N90704 - Reference Identification",
                        "description": "Reference information as defined for a particular Transaction Set or as specified by the Reference Identification Qualifier",
                        "elementIdentifier": "N90704"
                      },
                      "N90705": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "N90705 - Reference Identification Qualifier",
                        "description": "Code qualifying the Reference Identification",
                        "elementIdentifier": "N90705"
                      },
                      "N90706": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "N90706 - Reference Identification",
                        "description": "Reference information as defined for a particular Transaction Set or as specified by the Reference Identification Qualifier",
                        "elementIdentifier": "N90706"
                      }
                    }
                  }
                },
                "MSG": {
                  "schemaType": "segmentArray",
                  "type": "array",
                  "items": {
                    "schemaType": "segment",
                    "title": "MSG - Message Text",
                    "description": "To provide a free-form format that allows the transmission of text information",
                    "segmentIdentifier": "MSG",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "MSG01": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "MSG01 - Free-Form Message Text",
                        "description": "Free-form message text",
                        "elementIdentifier": "MSG01"
                      },
                      "MSG02": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "MSG02 - Printer Carriage Control Code",
                        "description": "A field to be used for the control of the line feed of the receiving printer",
                        "elementIdentifier": "MSG02"
                      },
                      "MSG03": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "MSG03 - Number",
                        "description": "A generic number",
                        "elementIdentifier": "MSG03"
                      }
                    }
                  }
                }
              }
            }
          },
          "V1_loop": {
            "schemaType": "loopArray",
            "type": "array",
            "loopContents": "V1-R4-DTM",
            "minItems": 1,
            "items": {
              "schemaType": "loop",
              "type": "object",
              "minProperties": 1,
              "additionalProperties": false,
              "properties": {
                "V1": {
                  "schemaType": "segmentArray",
                  "type": "array",
                  "items": {
                    "schemaType": "segment",
                    "title": "V1 - Vessel Identification",
                    "description": "To provide vessel details and voyage number",
                    "segmentIdentifier": "V1",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "V101": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "V101 - Vessel Code",
                        "description": "Code identifying vessel",
                        "elementIdentifier": "V101"
                      },
                      "V102": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "V102 - Vessel Name",
                        "description": "Name of ship as documented in \"Lloyd's Register of Ships\"",
                        "elementIdentifier": "V102"
                      },
                      "V103": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "V103 - Country Code",
                        "description": "Code identifying the country",
                        "elementIdentifier": "V103"
                      },
                      "V104": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "V104 - Flight/Voyage Number",
                        "description": "Identifying designator for the particular flight or voyage on which the cargo travels",
                        "elementIdentifier": "V104"
                      },
                      "V105": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "V105 - Standard Carrier Alpha Code",
                        "description": "Standard Carrier Alpha Code",
                        "elementIdentifier": "V105"
                      },
                      "V106": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "V106 - Vessel Requirement Code",
                        "description": "Code specifying options for satisfying vessel requirements",
                        "elementIdentifier": "V106"
                      },
                      "V107": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "V107 - Vessel Type Code",
                        "description": "Code to determine type of vessel",
                        "elementIdentifier": "V107"
                      },
                      "V108": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "V108 - Vessel Code Qualifier",
                        "description": "Code specifying vessel code source",
                        "elementIdentifier": "V108"
                      },
                      "V109": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "V109 - Transportation Method/Type Code",
                        "description": "Code specifying the method or type of transportation for the shipment",
                        "elementIdentifier": "V109"
                      }
                    }
                  }
                },
                "R4": {
                  "schemaType": "segmentArray",
                  "type": "array",
                  "items": {
                    "schemaType": "segment",
                    "title": "R4 - Port or Terminal",
                    "description": "Contractual or operational port or point relevant to the movement of the cargo",
                    "segmentIdentifier": "R4",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "R401": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "R401 - Port or Terminal Function Code",
                        "description": "Code defining function performed at the port or terminal with respect to a shipment",
                        "elementIdentifier": "R401"
                      },
                      "R402": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "R402 - Location Qualifier",
                        "description": "Code identifying type of location",
                        "elementIdentifier": "R402"
                      },
                      "R403": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "R403 - Location Identifier",
                        "description": "Code which identifies a specific location",
                        "elementIdentifier": "R403"
                      },
                      "R404": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "R404 - Port Name",
                        "description": "Free-form name for the place at which an offshore carrier originates or terminates (by transshipment or otherwise) its actual ocean carriage of property",
                        "elementIdentifier": "R404"
                      },
                      "R405": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "R405 - Country Code",
                        "description": "Code identifying the country",
                        "elementIdentifier": "R405"
                      },
                      "R406": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "R406 - Terminal Name",
                        "description": "Free-form field for terminal name",
                        "elementIdentifier": "R406"
                      },
                      "R407": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "R407 - Pier Number",
                        "description": "Identifying number for the pier",
                        "elementIdentifier": "R407"
                      },
                      "R408": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "R408 - State or Province Code",
                        "description": "Code (Standard State/Province) as defined by appropriate government agency",
                        "elementIdentifier": "R408"
                      }
                    }
                  }
                },
                "DTM": {
                  "schemaType": "segmentArray",
                  "type": "array",
                  "items": {
                    "schemaType": "segment",
                    "title": "DTM - Date/Time Reference",
                    "description": "To specify pertinent dates and times",
                    "segmentIdentifier": "DTM",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "DTM01": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "DTM01 - Date/Time Qualifier",
                        "description": "Code specifying type of date or time, or both date and time",
                        "elementIdentifier": "DTM01"
                      },
                      "DTM02": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "DTM02 - Date",
                        "description": "Date expressed as CCYYMMDD",
                        "elementIdentifier": "DTM02"
                      },
                      "DTM03": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "DTM03 - Time",
                        "description": "Time expressed in 24-hour clock time as follows: HHMM, or HHMMSS, or HHMMSSD, or HHMMSSDD, where H = hours (00-23), M = minutes (00-59), S = integer seconds (00-59) and DD = decimal seconds; decimal seconds are expressed as follows: D = tenths (0-9) and DD = hundredths (00-99)",
                        "elementIdentifier": "DTM03"
                      },
                      "DTM04": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "DTM04 - Time Code",
                        "description": "Code identifying the time. In accordance with International Standards Organization standard 8601, time can be specified by a + or - and an indication in hours in relation to Universal Time Coordinate (UTC) time; since + is a restricted character, + and - are substituted by P and M in the codes that follow",
                        "elementIdentifier": "DTM04"
                      },
                      "DTM05": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "DTM05 - Date Time Period Format Qualifier",
                        "description": "Code indicating the date format, time format, or date and time format",
                        "elementIdentifier": "DTM05"
                      },
                      "DTM06": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "DTM06 - Date Time Period",
                        "description": "Expression of a date, a time, or range of dates, times or dates and times",
                        "elementIdentifier": "DTM06"
                      }
                    }
                  }
                }
              }
            }
          },
          "FA1_loop": {
            "schemaType": "loopArray",
            "type": "array",
            "loopContents": "FA1-FA2",
            "minItems": 1,
            "items": {
              "schemaType": "loop",
              "type": "object",
              "minProperties": 1,
              "additionalProperties": false,
              "properties": {
                "FA1": {
                  "schemaType": "segmentArray",
                  "type": "array",
                  "items": {
                    "schemaType": "segment",
                    "title": "FA1 - Type of Financial Accounting Data",
                    "description": "To specify the organization controlling the content of the accounting citation, and the purpose associated with the accounting citation",
                    "segmentIdentifier": "FA1",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "FA101": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "FA101 - Agency Qualifier Code",
                        "description": "Code identifying the agency assigning the code values",
                        "elementIdentifier": "FA101"
                      },
                      "FA102": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "FA102 - Service, Promotion, Allowance, or Charge Code",
                        "description": "Code identifying the service, promotion, allowance, or charge",
                        "elementIdentifier": "FA102"
                      },
                      "FA103": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "FA103 - Allowance or Charge Indicator",
                        "description": "Code which indicates an allowance or charge for the service specified",
                        "elementIdentifier": "FA103"
                      }
                    }
                  }
                },
                "FA2": {
                  "schemaType": "segmentArray",
                  "type": "array",
                  "items": {
                    "schemaType": "segment",
                    "title": "FA2 - Accounting Data",
                    "description": "To specify the detailed accounting data",
                    "segmentIdentifier": "FA2",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "FA201": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "FA201 - Breakdown Structure Detail Code",
                        "description": "Codes identifying details relating to a reporting breakdown structure tree",
                        "elementIdentifier": "FA201"
                      },
                      "FA202": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "FA202 - Financial Information Code",
                        "description": "Code representing financial accounting information",
                        "elementIdentifier": "FA202"
                      }
                    }
                  }
                }
              }
            }
          },
          "IT1_loop": {
            "schemaType": "loopArray",
            "type": "array",
            "loopContents": "IT1-CRC-QTY-CUR-IT3-TXI-CTP-PAM-MEA-PID_loop-PWK-PKG-PO4-ITD-REF-YNQ-PER-SDQ-DTM-CAD-L7-SR-SAC_loop-SLN_loop-N1_loop-LM_loop-V1_loop-FA1_loop",
            "minItems": 1,
            "items": {
              "schemaType": "loop",
              "type": "object",
              "minProperties": 1,
              "additionalProperties": false,
              "properties": {
                "IT1": {
                  "schemaType": "segmentArray",
                  "type": "array",
                  "items": {
                    "schemaType": "segment",
                    "title": "IT1 - Baseline Item Data (Invoice)",
                    "description": "To specify the basic and most frequently used line item data for the invoice and related transactions",
                    "segmentIdentifier": "IT1",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "IT101": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "IT101 - Assigned Identification",
                        "description": "Alphanumeric characters assigned for differentiation within a transaction set",
                        "elementIdentifier": "IT101"
                      },
                      "IT102": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "IT102 - Quantity Invoiced",
                        "description": "Number of units invoiced (supplier units)",
                        "elementIdentifier": "IT102"
                      },
                      "IT103": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "IT103 - Unit or Basis for Measurement Code",
                        "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                        "elementIdentifier": "IT103"
                      },
                      "IT104": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "IT104 - Unit Price",
                        "description": "Price per unit of product, service, commodity, etc.",
                        "elementIdentifier": "IT104"
                      },
                      "IT105": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "IT105 - Basis of Unit Price Code",
                        "description": "Code identifying the type of unit price for an item",
                        "elementIdentifier": "IT105"
                      },
                      "IT106": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "IT106 - Product/Service ID Qualifier",
                        "description": "Code identifying the type/source of the descriptive number used in Product/Service ID (234)",
                        "elementIdentifier": "IT106"
                      },
                      "IT107": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "IT107 - Product/Service ID",
                        "description": "Identifying number for a product or service",
                        "elementIdentifier": "IT107"
                      },
                      "IT108": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "IT108 - Product/Service ID Qualifier",
                        "description": "Code identifying the type/source of the descriptive number used in Product/Service ID (234)",
                        "elementIdentifier": "IT108"
                      },
                      "IT109": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "IT109 - Product/Service ID",
                        "description": "Identifying number for a product or service",
                        "elementIdentifier": "IT109"
                      },
                      "IT110": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "IT110 - Product/Service ID Qualifier",
                        "description": "Code identifying the type/source of the descriptive number used in Product/Service ID (234)",
                        "elementIdentifier": "IT110"
                      },
                      "IT111": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "IT111 - Product/Service ID",
                        "description": "Identifying number for a product or service",
                        "elementIdentifier": "IT111"
                      },
                      "IT112": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "IT112 - Product/Service ID Qualifier",
                        "description": "Code identifying the type/source of the descriptive number used in Product/Service ID (234)",
                        "elementIdentifier": "IT112"
                      },
                      "IT113": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "IT113 - Product/Service ID",
                        "description": "Identifying number for a product or service",
                        "elementIdentifier": "IT113"
                      },
                      "IT114": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "IT114 - Product/Service ID Qualifier",
                        "description": "Code identifying the type/source of the descriptive number used in Product/Service ID (234)",
                        "elementIdentifier": "IT114"
                      },
                      "IT115": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "IT115 - Product/Service ID",
                        "description": "Identifying number for a product or service",
                        "elementIdentifier": "IT115"
                      },
                      "IT116": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "IT116 - Product/Service ID Qualifier",
                        "description": "Code identifying the type/source of the descriptive number used in Product/Service ID (234)",
                        "elementIdentifier": "IT116"
                      },
                      "IT117": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "IT117 - Product/Service ID",
                        "description": "Identifying number for a product or service",
                        "elementIdentifier": "IT117"
                      },
                      "IT118": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "IT118 - Product/Service ID Qualifier",
                        "description": "Code identifying the type/source of the descriptive number used in Product/Service ID (234)",
                        "elementIdentifier": "IT118"
                      },
                      "IT119": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "IT119 - Product/Service ID",
                        "description": "Identifying number for a product or service",
                        "elementIdentifier": "IT119"
                      },
                      "IT120": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "IT120 - Product/Service ID Qualifier",
                        "description": "Code identifying the type/source of the descriptive number used in Product/Service ID (234)",
                        "elementIdentifier": "IT120"
                      },
                      "IT121": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "IT121 - Product/Service ID",
                        "description": "Identifying number for a product or service",
                        "elementIdentifier": "IT121"
                      },
                      "IT122": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "IT122 - Product/Service ID Qualifier",
                        "description": "Code identifying the type/source of the descriptive number used in Product/Service ID (234)",
                        "elementIdentifier": "IT122"
                      },
                      "IT123": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "IT123 - Product/Service ID",
                        "description": "Identifying number for a product or service",
                        "elementIdentifier": "IT123"
                      },
                      "IT124": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "IT124 - Product/Service ID Qualifier",
                        "description": "Code identifying the type/source of the descriptive number used in Product/Service ID (234)",
                        "elementIdentifier": "IT124"
                      },
                      "IT125": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "IT125 - Product/Service ID",
                        "description": "Identifying number for a product or service",
                        "elementIdentifier": "IT125"
                      }
                    }
                  }
                },
                "CRC": {
                  "schemaType": "segmentArray",
                  "type": "array",
                  "items": {
                    "schemaType": "segment",
                    "title": "CRC - Conditions Indicator",
                    "description": "To supply information on conditions",
                    "segmentIdentifier": "CRC",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "CRC01": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CRC01 - Code Category",
                        "description": "Specifies the situation or category to which the code applies",
                        "elementIdentifier": "CRC01"
                      },
                      "CRC02": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CRC02 - Yes/No Condition or Response Code",
                        "description": "Code indicating a Yes or No condition or response",
                        "elementIdentifier": "CRC02"
                      },
                      "CRC03": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CRC03 - Condition Indicator",
                        "description": "Code indicating a condition",
                        "elementIdentifier": "CRC03"
                      },
                      "CRC04": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CRC04 - Condition Indicator",
                        "description": "Code indicating a condition",
                        "elementIdentifier": "CRC04"
                      },
                      "CRC05": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CRC05 - Condition Indicator",
                        "description": "Code indicating a condition",
                        "elementIdentifier": "CRC05"
                      },
                      "CRC06": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CRC06 - Condition Indicator",
                        "description": "Code indicating a condition",
                        "elementIdentifier": "CRC06"
                      },
                      "CRC07": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CRC07 - Condition Indicator",
                        "description": "Code indicating a condition",
                        "elementIdentifier": "CRC07"
                      }
                    }
                  }
                },
                "QTY": {
                  "schemaType": "segmentArray",
                  "type": "array",
                  "items": {
                    "schemaType": "segment",
                    "title": "QTY - Quantity",
                    "description": "To specify quantity information",
                    "segmentIdentifier": "QTY",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "QTY01": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "QTY01 - Quantity Qualifier",
                        "description": "Code specifying the type of quantity",
                        "elementIdentifier": "QTY01"
                      },
                      "QTY02": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "QTY02 - Quantity",
                        "description": "Numeric value of quantity",
                        "elementIdentifier": "QTY02"
                      },
                      "QTY0301": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "QTY0301 - Unit or Basis for Measurement Code",
                        "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                        "elementIdentifier": "QTY0301"
                      },
                      "QTY0302": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "QTY0302 - Exponent",
                        "description": "Power to which a unit is raised",
                        "elementIdentifier": "QTY0302"
                      },
                      "QTY0303": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "QTY0303 - Multiplier",
                        "description": "Value to be used as a multiplier to obtain a new value",
                        "elementIdentifier": "QTY0303"
                      },
                      "QTY0304": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "QTY0304 - Unit or Basis for Measurement Code",
                        "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                        "elementIdentifier": "QTY0304"
                      },
                      "QTY0305": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "QTY0305 - Exponent",
                        "description": "Power to which a unit is raised",
                        "elementIdentifier": "QTY0305"
                      },
                      "QTY0306": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "QTY0306 - Multiplier",
                        "description": "Value to be used as a multiplier to obtain a new value",
                        "elementIdentifier": "QTY0306"
                      },
                      "QTY0307": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "QTY0307 - Unit or Basis for Measurement Code",
                        "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                        "elementIdentifier": "QTY0307"
                      },
                      "QTY0308": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "QTY0308 - Exponent",
                        "description": "Power to which a unit is raised",
                        "elementIdentifier": "QTY0308"
                      },
                      "QTY0309": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "QTY0309 - Multiplier",
                        "description": "Value to be used as a multiplier to obtain a new value",
                        "elementIdentifier": "QTY0309"
                      },
                      "QTY0310": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "QTY0310 - Unit or Basis for Measurement Code",
                        "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                        "elementIdentifier": "QTY0310"
                      },
                      "QTY0311": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "QTY0311 - Exponent",
                        "description": "Power to which a unit is raised",
                        "elementIdentifier": "QTY0311"
                      },
                      "QTY0312": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "QTY0312 - Multiplier",
                        "description": "Value to be used as a multiplier to obtain a new value",
                        "elementIdentifier": "QTY0312"
                      },
                      "QTY0313": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "QTY0313 - Unit or Basis for Measurement Code",
                        "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                        "elementIdentifier": "QTY0313"
                      },
                      "QTY0314": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "QTY0314 - Exponent",
                        "description": "Power to which a unit is raised",
                        "elementIdentifier": "QTY0314"
                      },
                      "QTY0315": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "QTY0315 - Multiplier",
                        "description": "Value to be used as a multiplier to obtain a new value",
                        "elementIdentifier": "QTY0315"
                      },
                      "QTY04": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "QTY04 - Free-Form Message",
                        "description": "Free-form information",
                        "elementIdentifier": "QTY04"
                      }
                    }
                  }
                },
                "CUR": {
                  "schemaType": "segmentArray",
                  "type": "array",
                  "items": {
                    "schemaType": "segment",
                    "title": "CUR - Currency",
                    "description": "To specify the currency (dollars, pounds, francs, etc.) used in a transaction",
                    "segmentIdentifier": "CUR",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "CUR01": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CUR01 - Entity Identifier Code",
                        "description": "Code identifying an organizational entity, a physical location, property or an individual",
                        "elementIdentifier": "CUR01"
                      },
                      "CUR02": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CUR02 - Currency Code",
                        "description": "Code (Standard ISO) for country in whose currency the charges are specified",
                        "elementIdentifier": "CUR02"
                      },
                      "CUR03": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CUR03 - Exchange Rate",
                        "description": "Value to be used as a multiplier conversion factor to convert monetary value from one currency to another",
                        "elementIdentifier": "CUR03"
                      },
                      "CUR04": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CUR04 - Entity Identifier Code",
                        "description": "Code identifying an organizational entity, a physical location, property or an individual",
                        "elementIdentifier": "CUR04"
                      },
                      "CUR05": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CUR05 - Currency Code",
                        "description": "Code (Standard ISO) for country in whose currency the charges are specified",
                        "elementIdentifier": "CUR05"
                      },
                      "CUR06": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CUR06 - Currency Market/Exchange Code",
                        "description": "Code identifying the market upon which the currency exchange rate is based",
                        "elementIdentifier": "CUR06"
                      },
                      "CUR07": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CUR07 - Date/Time Qualifier",
                        "description": "Code specifying type of date or time, or both date and time",
                        "elementIdentifier": "CUR07"
                      },
                      "CUR08": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CUR08 - Date",
                        "description": "Date expressed as CCYYMMDD",
                        "elementIdentifier": "CUR08"
                      },
                      "CUR09": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CUR09 - Time",
                        "description": "Time expressed in 24-hour clock time as follows: HHMM, or HHMMSS, or HHMMSSD, or HHMMSSDD, where H = hours (00-23), M = minutes (00-59), S = integer seconds (00-59) and DD = decimal seconds; decimal seconds are expressed as follows: D = tenths (0-9) and DD = hundredths (00-99)",
                        "elementIdentifier": "CUR09"
                      },
                      "CUR10": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CUR10 - Date/Time Qualifier",
                        "description": "Code specifying type of date or time, or both date and time",
                        "elementIdentifier": "CUR10"
                      },
                      "CUR11": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CUR11 - Date",
                        "description": "Date expressed as CCYYMMDD",
                        "elementIdentifier": "CUR11"
                      },
                      "CUR12": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CUR12 - Time",
                        "description": "Time expressed in 24-hour clock time as follows: HHMM, or HHMMSS, or HHMMSSD, or HHMMSSDD, where H = hours (00-23), M = minutes (00-59), S = integer seconds (00-59) and DD = decimal seconds; decimal seconds are expressed as follows: D = tenths (0-9) and DD = hundredths (00-99)",
                        "elementIdentifier": "CUR12"
                      },
                      "CUR13": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CUR13 - Date/Time Qualifier",
                        "description": "Code specifying type of date or time, or both date and time",
                        "elementIdentifier": "CUR13"
                      },
                      "CUR14": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CUR14 - Date",
                        "description": "Date expressed as CCYYMMDD",
                        "elementIdentifier": "CUR14"
                      },
                      "CUR15": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CUR15 - Time",
                        "description": "Time expressed in 24-hour clock time as follows: HHMM, or HHMMSS, or HHMMSSD, or HHMMSSDD, where H = hours (00-23), M = minutes (00-59), S = integer seconds (00-59) and DD = decimal seconds; decimal seconds are expressed as follows: D = tenths (0-9) and DD = hundredths (00-99)",
                        "elementIdentifier": "CUR15"
                      },
                      "CUR16": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CUR16 - Date/Time Qualifier",
                        "description": "Code specifying type of date or time, or both date and time",
                        "elementIdentifier": "CUR16"
                      },
                      "CUR17": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CUR17 - Date",
                        "description": "Date expressed as CCYYMMDD",
                        "elementIdentifier": "CUR17"
                      },
                      "CUR18": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CUR18 - Time",
                        "description": "Time expressed in 24-hour clock time as follows: HHMM, or HHMMSS, or HHMMSSD, or HHMMSSDD, where H = hours (00-23), M = minutes (00-59), S = integer seconds (00-59) and DD = decimal seconds; decimal seconds are expressed as follows: D = tenths (0-9) and DD = hundredths (00-99)",
                        "elementIdentifier": "CUR18"
                      },
                      "CUR19": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CUR19 - Date/Time Qualifier",
                        "description": "Code specifying type of date or time, or both date and time",
                        "elementIdentifier": "CUR19"
                      },
                      "CUR20": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CUR20 - Date",
                        "description": "Date expressed as CCYYMMDD",
                        "elementIdentifier": "CUR20"
                      },
                      "CUR21": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CUR21 - Time",
                        "description": "Time expressed in 24-hour clock time as follows: HHMM, or HHMMSS, or HHMMSSD, or HHMMSSDD, where H = hours (00-23), M = minutes (00-59), S = integer seconds (00-59) and DD = decimal seconds; decimal seconds are expressed as follows: D = tenths (0-9) and DD = hundredths (00-99)",
                        "elementIdentifier": "CUR21"
                      }
                    }
                  }
                },
                "IT3": {
                  "schemaType": "segmentArray",
                  "type": "array",
                  "items": {
                    "schemaType": "segment",
                    "title": "IT3 - Additional Item Data",
                    "description": "To specify additional item details relating to variations between ordered and shipped quantities, or to specify alternate units of measures and quantities",
                    "segmentIdentifier": "IT3",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "IT301": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "IT301 - Number of Units Shipped",
                        "description": "Numeric value of units shipped in manufacturer's shipping units for a line item or transaction set",
                        "elementIdentifier": "IT301"
                      },
                      "IT302": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "IT302 - Unit or Basis for Measurement Code",
                        "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                        "elementIdentifier": "IT302"
                      },
                      "IT303": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "IT303 - Shipment/Order Status Code",
                        "description": "Code indicating the status of an order or shipment or the disposition of any difference between the quantity ordered and the quantity shipped for a line item or transaction",
                        "elementIdentifier": "IT303"
                      },
                      "IT304": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "IT304 - Quantity Difference",
                        "description": "Numeric value of variance between ordered and shipped quantities",
                        "elementIdentifier": "IT304"
                      },
                      "IT305": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "IT305 - Change Reason Code",
                        "description": "Code specifying the reason for price or quantity change",
                        "elementIdentifier": "IT305"
                      }
                    }
                  }
                },
                "TXI": {
                  "schemaType": "segmentArray",
                  "type": "array",
                  "items": {
                    "schemaType": "segment",
                    "title": "TXI - Tax Information",
                    "description": "To specify tax information",
                    "segmentIdentifier": "TXI",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "TXI01": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "TXI01 - Tax Type Code",
                        "description": "Code specifying the type of tax",
                        "elementIdentifier": "TXI01"
                      },
                      "TXI02": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "TXI02 - Monetary Amount",
                        "description": "Monetary amount",
                        "elementIdentifier": "TXI02"
                      },
                      "TXI03": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "TXI03 - Percent",
                        "description": "Percentage expressed as a decimal",
                        "elementIdentifier": "TXI03"
                      },
                      "TXI04": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "TXI04 - Tax Jurisdiction Code Qualifier",
                        "description": "Code identifying the source of the data used in tax jurisdiction code",
                        "elementIdentifier": "TXI04"
                      },
                      "TXI05": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "TXI05 - Tax Jurisdiction Code",
                        "description": "Code identifying the taxing jurisdiction",
                        "elementIdentifier": "TXI05"
                      },
                      "TXI06": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "TXI06 - Tax Exempt Code",
                        "description": "Code identifying exemption status from sales and use tax",
                        "elementIdentifier": "TXI06"
                      },
                      "TXI07": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "TXI07 - Relationship Code",
                        "description": "Code indicating the relationship between entities",
                        "elementIdentifier": "TXI07"
                      },
                      "TXI08": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "TXI08 - Dollar Basis For Percent",
                        "description": "Dollar basis to be used in the percent calculation of the allowance, charge or tax",
                        "elementIdentifier": "TXI08"
                      },
                      "TXI09": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "TXI09 - Tax Identification Number",
                        "description": "Number assigned to a purchaser (buyer, orderer) by a taxing jurisdiction (state, county, etc.); often called a tax exemption number or certificate number",
                        "elementIdentifier": "TXI09"
                      },
                      "TXI10": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "TXI10 - Assigned Identification",
                        "description": "Alphanumeric characters assigned for differentiation within a transaction set",
                        "elementIdentifier": "TXI10"
                      }
                    }
                  }
                },
                "CTP": {
                  "schemaType": "segmentArray",
                  "type": "array",
                  "items": {
                    "schemaType": "segment",
                    "title": "CTP - Pricing Information",
                    "description": "To specify pricing information",
                    "segmentIdentifier": "CTP",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "CTP01": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CTP01 - Class of Trade Code",
                        "description": "Code indicating class of trade",
                        "elementIdentifier": "CTP01"
                      },
                      "CTP02": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CTP02 - Price Identifier Code",
                        "description": "Code identifying pricing specification",
                        "elementIdentifier": "CTP02"
                      },
                      "CTP03": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CTP03 - Unit Price",
                        "description": "Price per unit of product, service, commodity, etc.",
                        "elementIdentifier": "CTP03"
                      },
                      "CTP04": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CTP04 - Quantity",
                        "description": "Numeric value of quantity",
                        "elementIdentifier": "CTP04"
                      },
                      "CTP0501": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CTP0501 - Unit or Basis for Measurement Code",
                        "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                        "elementIdentifier": "CTP0501"
                      },
                      "CTP0502": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CTP0502 - Exponent",
                        "description": "Power to which a unit is raised",
                        "elementIdentifier": "CTP0502"
                      },
                      "CTP0503": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CTP0503 - Multiplier",
                        "description": "Value to be used as a multiplier to obtain a new value",
                        "elementIdentifier": "CTP0503"
                      },
                      "CTP0504": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CTP0504 - Unit or Basis for Measurement Code",
                        "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                        "elementIdentifier": "CTP0504"
                      },
                      "CTP0505": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CTP0505 - Exponent",
                        "description": "Power to which a unit is raised",
                        "elementIdentifier": "CTP0505"
                      },
                      "CTP0506": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CTP0506 - Multiplier",
                        "description": "Value to be used as a multiplier to obtain a new value",
                        "elementIdentifier": "CTP0506"
                      },
                      "CTP0507": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CTP0507 - Unit or Basis for Measurement Code",
                        "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                        "elementIdentifier": "CTP0507"
                      },
                      "CTP0508": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CTP0508 - Exponent",
                        "description": "Power to which a unit is raised",
                        "elementIdentifier": "CTP0508"
                      },
                      "CTP0509": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CTP0509 - Multiplier",
                        "description": "Value to be used as a multiplier to obtain a new value",
                        "elementIdentifier": "CTP0509"
                      },
                      "CTP0510": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CTP0510 - Unit or Basis for Measurement Code",
                        "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                        "elementIdentifier": "CTP0510"
                      },
                      "CTP0511": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CTP0511 - Exponent",
                        "description": "Power to which a unit is raised",
                        "elementIdentifier": "CTP0511"
                      },
                      "CTP0512": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CTP0512 - Multiplier",
                        "description": "Value to be used as a multiplier to obtain a new value",
                        "elementIdentifier": "CTP0512"
                      },
                      "CTP0513": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CTP0513 - Unit or Basis for Measurement Code",
                        "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                        "elementIdentifier": "CTP0513"
                      },
                      "CTP0514": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CTP0514 - Exponent",
                        "description": "Power to which a unit is raised",
                        "elementIdentifier": "CTP0514"
                      },
                      "CTP0515": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CTP0515 - Multiplier",
                        "description": "Value to be used as a multiplier to obtain a new value",
                        "elementIdentifier": "CTP0515"
                      },
                      "CTP06": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CTP06 - Price Multiplier Qualifier",
                        "description": "Code indicating the type of price multiplier",
                        "elementIdentifier": "CTP06"
                      },
                      "CTP07": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CTP07 - Multiplier",
                        "description": "Value to be used as a multiplier to obtain a new value",
                        "elementIdentifier": "CTP07"
                      },
                      "CTP08": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CTP08 - Monetary Amount",
                        "description": "Monetary amount",
                        "elementIdentifier": "CTP08"
                      },
                      "CTP09": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CTP09 - Basis of Unit Price Code",
                        "description": "Code identifying the type of unit price for an item",
                        "elementIdentifier": "CTP09"
                      },
                      "CTP10": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CTP10 - Condition Value",
                        "description": "Identifies rate restrictions or provisions",
                        "elementIdentifier": "CTP10"
                      },
                      "CTP11": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CTP11 - Multiple Price Quantity",
                        "description": "Quantity of units for a given price, e.g., 3 for $10.00",
                        "elementIdentifier": "CTP11"
                      }
                    }
                  }
                },
                "PAM": {
                  "schemaType": "segmentArray",
                  "type": "array",
                  "items": {
                    "schemaType": "segment",
                    "title": "PAM - Period Amount",
                    "description": "To indicate a quantity, and/or amount for an identified period",
                    "segmentIdentifier": "PAM",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "PAM01": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PAM01 - Quantity Qualifier",
                        "description": "Code specifying the type of quantity",
                        "elementIdentifier": "PAM01"
                      },
                      "PAM02": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PAM02 - Quantity",
                        "description": "Numeric value of quantity",
                        "elementIdentifier": "PAM02"
                      },
                      "PAM0301": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PAM0301 - Unit or Basis for Measurement Code",
                        "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                        "elementIdentifier": "PAM0301"
                      },
                      "PAM0302": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PAM0302 - Exponent",
                        "description": "Power to which a unit is raised",
                        "elementIdentifier": "PAM0302"
                      },
                      "PAM0303": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PAM0303 - Multiplier",
                        "description": "Value to be used as a multiplier to obtain a new value",
                        "elementIdentifier": "PAM0303"
                      },
                      "PAM0304": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PAM0304 - Unit or Basis for Measurement Code",
                        "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                        "elementIdentifier": "PAM0304"
                      },
                      "PAM0305": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PAM0305 - Exponent",
                        "description": "Power to which a unit is raised",
                        "elementIdentifier": "PAM0305"
                      },
                      "PAM0306": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PAM0306 - Multiplier",
                        "description": "Value to be used as a multiplier to obtain a new value",
                        "elementIdentifier": "PAM0306"
                      },
                      "PAM0307": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PAM0307 - Unit or Basis for Measurement Code",
                        "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                        "elementIdentifier": "PAM0307"
                      },
                      "PAM0308": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PAM0308 - Exponent",
                        "description": "Power to which a unit is raised",
                        "elementIdentifier": "PAM0308"
                      },
                      "PAM0309": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PAM0309 - Multiplier",
                        "description": "Value to be used as a multiplier to obtain a new value",
                        "elementIdentifier": "PAM0309"
                      },
                      "PAM0310": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PAM0310 - Unit or Basis for Measurement Code",
                        "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                        "elementIdentifier": "PAM0310"
                      },
                      "PAM0311": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PAM0311 - Exponent",
                        "description": "Power to which a unit is raised",
                        "elementIdentifier": "PAM0311"
                      },
                      "PAM0312": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PAM0312 - Multiplier",
                        "description": "Value to be used as a multiplier to obtain a new value",
                        "elementIdentifier": "PAM0312"
                      },
                      "PAM0313": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PAM0313 - Unit or Basis for Measurement Code",
                        "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                        "elementIdentifier": "PAM0313"
                      },
                      "PAM0314": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PAM0314 - Exponent",
                        "description": "Power to which a unit is raised",
                        "elementIdentifier": "PAM0314"
                      },
                      "PAM0315": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PAM0315 - Multiplier",
                        "description": "Value to be used as a multiplier to obtain a new value",
                        "elementIdentifier": "PAM0315"
                      },
                      "PAM04": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PAM04 - Amount Qualifier Code",
                        "description": "Code to qualify amount",
                        "elementIdentifier": "PAM04"
                      },
                      "PAM05": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PAM05 - Monetary Amount",
                        "description": "Monetary amount",
                        "elementIdentifier": "PAM05"
                      },
                      "PAM06": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PAM06 - Unit of Time Period or Interval",
                        "description": "Code indicating the time period or interval",
                        "elementIdentifier": "PAM06"
                      },
                      "PAM07": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PAM07 - Date/Time Qualifier",
                        "description": "Code specifying type of date or time, or both date and time",
                        "elementIdentifier": "PAM07"
                      },
                      "PAM08": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PAM08 - Date",
                        "description": "Date expressed as CCYYMMDD",
                        "elementIdentifier": "PAM08"
                      },
                      "PAM09": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PAM09 - Time",
                        "description": "Time expressed in 24-hour clock time as follows: HHMM, or HHMMSS, or HHMMSSD, or HHMMSSDD, where H = hours (00-23), M = minutes (00-59), S = integer seconds (00-59) and DD = decimal seconds; decimal seconds are expressed as follows: D = tenths (0-9) and DD = hundredths (00-99)",
                        "elementIdentifier": "PAM09"
                      },
                      "PAM10": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PAM10 - Date/Time Qualifier",
                        "description": "Code specifying type of date or time, or both date and time",
                        "elementIdentifier": "PAM10"
                      },
                      "PAM11": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PAM11 - Date",
                        "description": "Date expressed as CCYYMMDD",
                        "elementIdentifier": "PAM11"
                      },
                      "PAM12": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PAM12 - Time",
                        "description": "Time expressed in 24-hour clock time as follows: HHMM, or HHMMSS, or HHMMSSD, or HHMMSSDD, where H = hours (00-23), M = minutes (00-59), S = integer seconds (00-59) and DD = decimal seconds; decimal seconds are expressed as follows: D = tenths (0-9) and DD = hundredths (00-99)",
                        "elementIdentifier": "PAM12"
                      },
                      "PAM13": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PAM13 - Percent Qualifier",
                        "description": "Code to qualify percent",
                        "elementIdentifier": "PAM13"
                      },
                      "PAM14": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PAM14 - Percent",
                        "description": "Percentage expressed as a decimal",
                        "elementIdentifier": "PAM14"
                      },
                      "PAM15": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PAM15 - Yes/No Condition or Response Code",
                        "description": "Code indicating a Yes or No condition or response",
                        "elementIdentifier": "PAM15"
                      }
                    }
                  }
                },
                "MEA": {
                  "schemaType": "segmentArray",
                  "type": "array",
                  "items": {
                    "schemaType": "segment",
                    "title": "MEA - Measurements",
                    "description": "To specify physical measurements or counts, including dimensions, tolerances, variances, and weights(See Figures Appendix for example of use of C001)",
                    "segmentIdentifier": "MEA",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "MEA01": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "MEA01 - Measurement Reference ID Code",
                        "description": "Code identifying the broad category to which a measurement applies",
                        "elementIdentifier": "MEA01"
                      },
                      "MEA02": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "MEA02 - Measurement Qualifier",
                        "description": "Code identifying a specific product or process characteristic to which a measurement applies",
                        "elementIdentifier": "MEA02"
                      },
                      "MEA03": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "MEA03 - Measurement Value",
                        "description": "The value of the measurement",
                        "elementIdentifier": "MEA03"
                      },
                      "MEA0401": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "MEA0401 - Unit or Basis for Measurement Code",
                        "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                        "elementIdentifier": "MEA0401"
                      },
                      "MEA0402": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "MEA0402 - Exponent",
                        "description": "Power to which a unit is raised",
                        "elementIdentifier": "MEA0402"
                      },
                      "MEA0403": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "MEA0403 - Multiplier",
                        "description": "Value to be used as a multiplier to obtain a new value",
                        "elementIdentifier": "MEA0403"
                      },
                      "MEA0404": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "MEA0404 - Unit or Basis for Measurement Code",
                        "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                        "elementIdentifier": "MEA0404"
                      },
                      "MEA0405": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "MEA0405 - Exponent",
                        "description": "Power to which a unit is raised",
                        "elementIdentifier": "MEA0405"
                      },
                      "MEA0406": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "MEA0406 - Multiplier",
                        "description": "Value to be used as a multiplier to obtain a new value",
                        "elementIdentifier": "MEA0406"
                      },
                      "MEA0407": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "MEA0407 - Unit or Basis for Measurement Code",
                        "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                        "elementIdentifier": "MEA0407"
                      },
                      "MEA0408": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "MEA0408 - Exponent",
                        "description": "Power to which a unit is raised",
                        "elementIdentifier": "MEA0408"
                      },
                      "MEA0409": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "MEA0409 - Multiplier",
                        "description": "Value to be used as a multiplier to obtain a new value",
                        "elementIdentifier": "MEA0409"
                      },
                      "MEA0410": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "MEA0410 - Unit or Basis for Measurement Code",
                        "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                        "elementIdentifier": "MEA0410"
                      },
                      "MEA0411": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "MEA0411 - Exponent",
                        "description": "Power to which a unit is raised",
                        "elementIdentifier": "MEA0411"
                      },
                      "MEA0412": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "MEA0412 - Multiplier",
                        "description": "Value to be used as a multiplier to obtain a new value",
                        "elementIdentifier": "MEA0412"
                      },
                      "MEA0413": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "MEA0413 - Unit or Basis for Measurement Code",
                        "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                        "elementIdentifier": "MEA0413"
                      },
                      "MEA0414": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "MEA0414 - Exponent",
                        "description": "Power to which a unit is raised",
                        "elementIdentifier": "MEA0414"
                      },
                      "MEA0415": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "MEA0415 - Multiplier",
                        "description": "Value to be used as a multiplier to obtain a new value",
                        "elementIdentifier": "MEA0415"
                      },
                      "MEA05": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "MEA05 - Range Minimum",
                        "description": "The value specifying the minimum of the measurement range",
                        "elementIdentifier": "MEA05"
                      },
                      "MEA06": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "MEA06 - Range Maximum",
                        "description": "The value specifying the maximum of the measurement range",
                        "elementIdentifier": "MEA06"
                      },
                      "MEA07": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "MEA07 - Measurement Significance Code",
                        "description": "Code used to benchmark, qualify or further define a measurement value",
                        "elementIdentifier": "MEA07"
                      },
                      "MEA08": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "MEA08 - Measurement Attribute Code",
                        "description": "Code used to express an attribute response when a numeric measurement value cannot be determined",
                        "elementIdentifier": "MEA08"
                      },
                      "MEA09": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "MEA09 - Surface/Layer/Position Code",
                        "description": "Code indicating the product surface, layer or position that is being described",
                        "elementIdentifier": "MEA09"
                      },
                      "MEA10": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "MEA10 - Measurement Method or Device",
                        "description": "The method or device used to record the measurement",
                        "elementIdentifier": "MEA10"
                      }
                    }
                  }
                },
                "PID_loop": {
                  "schemaType": "loopArray",
                  "type": "array",
                  "loopContents": "PID-MEA",
                  "minItems": 1,
                  "items": {
                    "schemaType": "loop",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "PID": {
                        "schemaType": "segmentArray",
                        "type": "array",
                        "items": {
                          "schemaType": "segment",
                          "title": "PID - Product/Item Description",
                          "description": "To describe a product or process in coded or free-form format",
                          "segmentIdentifier": "PID",
                          "type": "object",
                          "minProperties": 1,
                          "additionalProperties": false,
                          "properties": {
                            "PID01": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "PID01 - Item Description Type",
                              "description": "Code indicating the format of a description",
                              "elementIdentifier": "PID01"
                            },
                            "PID02": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "PID02 - Product/Process Characteristic Code",
                              "description": "Code identifying the general class of a product or process characteristic",
                              "elementIdentifier": "PID02"
                            },
                            "PID03": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "PID03 - Agency Qualifier Code",
                              "description": "Code identifying the agency assigning the code values",
                              "elementIdentifier": "PID03"
                            },
                            "PID04": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "PID04 - Product Description Code",
                              "description": "A code from an industry code list which provides specific data about a product characteristic",
                              "elementIdentifier": "PID04"
                            },
                            "PID05": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "PID05 - Description",
                              "description": "A free-form description to clarify the related data elements and their content",
                              "elementIdentifier": "PID05"
                            },
                            "PID06": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "PID06 - Surface/Layer/Position Code",
                              "description": "Code indicating the product surface, layer or position that is being described",
                              "elementIdentifier": "PID06"
                            },
                            "PID07": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "PID07 - Source Subqualifier",
                              "description": "A reference that indicates the table or text maintained by the Source Qualifier",
                              "elementIdentifier": "PID07"
                            },
                            "PID08": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "PID08 - Yes/No Condition or Response Code",
                              "description": "Code indicating a Yes or No condition or response",
                              "elementIdentifier": "PID08"
                            },
                            "PID09": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "PID09 - Language Code",
                              "description": "Code designating the language used in text, from a standard code list maintained by the International Standards Organization (ISO 639)",
                              "elementIdentifier": "PID09"
                            }
                          }
                        }
                      },
                      "MEA": {
                        "schemaType": "segmentArray",
                        "type": "array",
                        "items": {
                          "schemaType": "segment",
                          "title": "MEA - Measurements",
                          "description": "To specify physical measurements or counts, including dimensions, tolerances, variances, and weights(See Figures Appendix for example of use of C001)",
                          "segmentIdentifier": "MEA",
                          "type": "object",
                          "minProperties": 1,
                          "additionalProperties": false,
                          "properties": {
                            "MEA01": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "MEA01 - Measurement Reference ID Code",
                              "description": "Code identifying the broad category to which a measurement applies",
                              "elementIdentifier": "MEA01"
                            },
                            "MEA02": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "MEA02 - Measurement Qualifier",
                              "description": "Code identifying a specific product or process characteristic to which a measurement applies",
                              "elementIdentifier": "MEA02"
                            },
                            "MEA03": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "MEA03 - Measurement Value",
                              "description": "The value of the measurement",
                              "elementIdentifier": "MEA03"
                            },
                            "MEA0401": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "MEA0401 - Unit or Basis for Measurement Code",
                              "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                              "elementIdentifier": "MEA0401"
                            },
                            "MEA0402": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "MEA0402 - Exponent",
                              "description": "Power to which a unit is raised",
                              "elementIdentifier": "MEA0402"
                            },
                            "MEA0403": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "MEA0403 - Multiplier",
                              "description": "Value to be used as a multiplier to obtain a new value",
                              "elementIdentifier": "MEA0403"
                            },
                            "MEA0404": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "MEA0404 - Unit or Basis for Measurement Code",
                              "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                              "elementIdentifier": "MEA0404"
                            },
                            "MEA0405": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "MEA0405 - Exponent",
                              "description": "Power to which a unit is raised",
                              "elementIdentifier": "MEA0405"
                            },
                            "MEA0406": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "MEA0406 - Multiplier",
                              "description": "Value to be used as a multiplier to obtain a new value",
                              "elementIdentifier": "MEA0406"
                            },
                            "MEA0407": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "MEA0407 - Unit or Basis for Measurement Code",
                              "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                              "elementIdentifier": "MEA0407"
                            },
                            "MEA0408": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "MEA0408 - Exponent",
                              "description": "Power to which a unit is raised",
                              "elementIdentifier": "MEA0408"
                            },
                            "MEA0409": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "MEA0409 - Multiplier",
                              "description": "Value to be used as a multiplier to obtain a new value",
                              "elementIdentifier": "MEA0409"
                            },
                            "MEA0410": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "MEA0410 - Unit or Basis for Measurement Code",
                              "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                              "elementIdentifier": "MEA0410"
                            },
                            "MEA0411": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "MEA0411 - Exponent",
                              "description": "Power to which a unit is raised",
                              "elementIdentifier": "MEA0411"
                            },
                            "MEA0412": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "MEA0412 - Multiplier",
                              "description": "Value to be used as a multiplier to obtain a new value",
                              "elementIdentifier": "MEA0412"
                            },
                            "MEA0413": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "MEA0413 - Unit or Basis for Measurement Code",
                              "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                              "elementIdentifier": "MEA0413"
                            },
                            "MEA0414": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "MEA0414 - Exponent",
                              "description": "Power to which a unit is raised",
                              "elementIdentifier": "MEA0414"
                            },
                            "MEA0415": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "MEA0415 - Multiplier",
                              "description": "Value to be used as a multiplier to obtain a new value",
                              "elementIdentifier": "MEA0415"
                            },
                            "MEA05": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "MEA05 - Range Minimum",
                              "description": "The value specifying the minimum of the measurement range",
                              "elementIdentifier": "MEA05"
                            },
                            "MEA06": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "MEA06 - Range Maximum",
                              "description": "The value specifying the maximum of the measurement range",
                              "elementIdentifier": "MEA06"
                            },
                            "MEA07": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "MEA07 - Measurement Significance Code",
                              "description": "Code used to benchmark, qualify or further define a measurement value",
                              "elementIdentifier": "MEA07"
                            },
                            "MEA08": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "MEA08 - Measurement Attribute Code",
                              "description": "Code used to express an attribute response when a numeric measurement value cannot be determined",
                              "elementIdentifier": "MEA08"
                            },
                            "MEA09": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "MEA09 - Surface/Layer/Position Code",
                              "description": "Code indicating the product surface, layer or position that is being described",
                              "elementIdentifier": "MEA09"
                            },
                            "MEA10": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "MEA10 - Measurement Method or Device",
                              "description": "The method or device used to record the measurement",
                              "elementIdentifier": "MEA10"
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "PWK": {
                  "schemaType": "segmentArray",
                  "type": "array",
                  "items": {
                    "schemaType": "segment",
                    "title": "PWK - Paperwork",
                    "description": "To identify the type or transmission or both of paperwork or supporting information",
                    "segmentIdentifier": "PWK",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "PWK01": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PWK01 - Report Type Code",
                        "description": "Code indicating the title or contents of a document, report or supporting item",
                        "elementIdentifier": "PWK01"
                      },
                      "PWK02": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PWK02 - Report Transmission Code",
                        "description": "Code defining timing, transmission method or format by which reports are to be sent",
                        "elementIdentifier": "PWK02"
                      },
                      "PWK03": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PWK03 - Report Copies Needed",
                        "description": "The number of copies of a report that should be sent to the addressee",
                        "elementIdentifier": "PWK03"
                      },
                      "PWK04": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PWK04 - Entity Identifier Code",
                        "description": "Code identifying an organizational entity, a physical location, property or an individual",
                        "elementIdentifier": "PWK04"
                      },
                      "PWK05": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PWK05 - Identification Code Qualifier",
                        "description": "Code designating the system/method of code structure used for Identification Code (67)",
                        "elementIdentifier": "PWK05"
                      },
                      "PWK06": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PWK06 - Identification Code",
                        "description": "Code identifying a party or other code",
                        "elementIdentifier": "PWK06"
                      },
                      "PWK07": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PWK07 - Description",
                        "description": "A free-form description to clarify the related data elements and their content",
                        "elementIdentifier": "PWK07"
                      },
                      "PWK0801": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PWK0801 - Paperwork/Report Action Code",
                        "description": "Code specifying how the paperwork or report that is identified in the PWK segment relates to the transaction set or to identify the action that is required",
                        "elementIdentifier": "PWK0801"
                      },
                      "PWK0802": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PWK0802 - Paperwork/Report Action Code",
                        "description": "Code specifying how the paperwork or report that is identified in the PWK segment relates to the transaction set or to identify the action that is required",
                        "elementIdentifier": "PWK0802"
                      },
                      "PWK0803": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PWK0803 - Paperwork/Report Action Code",
                        "description": "Code specifying how the paperwork or report that is identified in the PWK segment relates to the transaction set or to identify the action that is required",
                        "elementIdentifier": "PWK0803"
                      },
                      "PWK0804": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PWK0804 - Paperwork/Report Action Code",
                        "description": "Code specifying how the paperwork or report that is identified in the PWK segment relates to the transaction set or to identify the action that is required",
                        "elementIdentifier": "PWK0804"
                      },
                      "PWK0805": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PWK0805 - Paperwork/Report Action Code",
                        "description": "Code specifying how the paperwork or report that is identified in the PWK segment relates to the transaction set or to identify the action that is required",
                        "elementIdentifier": "PWK0805"
                      },
                      "PWK09": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PWK09 - Request Category Code",
                        "description": "Code indicating a type of request",
                        "elementIdentifier": "PWK09"
                      }
                    }
                  }
                },
                "PKG": {
                  "schemaType": "segmentArray",
                  "type": "array",
                  "items": {
                    "schemaType": "segment",
                    "title": "PKG - Marking, Packaging, Loading",
                    "description": "To describe marking, packaging, loading, and unloading requirements",
                    "segmentIdentifier": "PKG",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "PKG01": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PKG01 - Item Description Type",
                        "description": "Code indicating the format of a description",
                        "elementIdentifier": "PKG01"
                      },
                      "PKG02": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PKG02 - Packaging Characteristic Code",
                        "description": "Code specifying the marking, packaging, loading and related characteristics being described",
                        "elementIdentifier": "PKG02"
                      },
                      "PKG03": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PKG03 - Agency Qualifier Code",
                        "description": "Code identifying the agency assigning the code values",
                        "elementIdentifier": "PKG03"
                      },
                      "PKG04": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PKG04 - Packaging Description Code",
                        "description": "A code from an industry code list which provides specific data about the marking, packaging or loading and unloading of a product",
                        "elementIdentifier": "PKG04"
                      },
                      "PKG05": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PKG05 - Description",
                        "description": "A free-form description to clarify the related data elements and their content",
                        "elementIdentifier": "PKG05"
                      },
                      "PKG06": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PKG06 - Unit Load Option Code",
                        "description": "Code identifying loading or unloading a shipment",
                        "elementIdentifier": "PKG06"
                      }
                    }
                  }
                },
                "PO4": {
                  "schemaType": "segmentArray",
                  "type": "array",
                  "items": {
                    "schemaType": "segment",
                    "title": "PO4 - Item Physical Details",
                    "description": "To specify the physical qualities, packaging, weights, and dimensions relating to the item",
                    "segmentIdentifier": "PO4",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "PO401": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PO401 - Pack",
                        "description": "The number of inner containers, or number of eaches if there are no inner containers, per outer container",
                        "elementIdentifier": "PO401"
                      },
                      "PO402": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PO402 - Size",
                        "description": "Size of supplier units in pack",
                        "elementIdentifier": "PO402"
                      },
                      "PO403": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PO403 - Unit or Basis for Measurement Code",
                        "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                        "elementIdentifier": "PO403"
                      },
                      "PO404": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PO404 - Packaging Code",
                        "description": "Code identifying the type of packaging; Part 1: Packaging Form, Part 2: Packaging Material; if the Data Element is used, then Part 1 is always required",
                        "elementIdentifier": "PO404"
                      },
                      "PO405": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PO405 - Weight Qualifier",
                        "description": "Code defining the type of weight",
                        "elementIdentifier": "PO405"
                      },
                      "PO406": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PO406 - Gross Weight per Pack",
                        "description": "Numeric value of gross weight per pack",
                        "elementIdentifier": "PO406"
                      },
                      "PO407": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PO407 - Unit or Basis for Measurement Code",
                        "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                        "elementIdentifier": "PO407"
                      },
                      "PO408": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PO408 - Gross Volume per Pack",
                        "description": "Numeric value of gross volume per pack",
                        "elementIdentifier": "PO408"
                      },
                      "PO409": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PO409 - Unit or Basis for Measurement Code",
                        "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                        "elementIdentifier": "PO409"
                      },
                      "PO410": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PO410 - Length",
                        "description": "Largest horizontal dimension of an object measured when the object is in the upright position",
                        "elementIdentifier": "PO410"
                      },
                      "PO411": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PO411 - Width",
                        "description": "Shorter measurement of the two horizontal dimensions measured with the object in the upright position",
                        "elementIdentifier": "PO411"
                      },
                      "PO412": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PO412 - Height",
                        "description": "Vertical dimension of an object measured when the object is in the upright position",
                        "elementIdentifier": "PO412"
                      },
                      "PO413": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PO413 - Unit or Basis for Measurement Code",
                        "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                        "elementIdentifier": "PO413"
                      },
                      "PO414": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PO414 - Inner Pack",
                        "description": "The number of eaches per inner container",
                        "elementIdentifier": "PO414"
                      },
                      "PO415": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PO415 - Surface/Layer/Position Code",
                        "description": "Code indicating the product surface, layer or position that is being described",
                        "elementIdentifier": "PO415"
                      },
                      "PO416": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PO416 - Assigned Identification",
                        "description": "Alphanumeric characters assigned for differentiation within a transaction set",
                        "elementIdentifier": "PO416"
                      },
                      "PO417": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PO417 - Assigned Identification",
                        "description": "Alphanumeric characters assigned for differentiation within a transaction set",
                        "elementIdentifier": "PO417"
                      },
                      "PO418": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PO418 - Number",
                        "description": "A generic number",
                        "elementIdentifier": "PO418"
                      }
                    }
                  }
                },
                "ITD": {
                  "schemaType": "segmentArray",
                  "type": "array",
                  "items": {
                    "schemaType": "segment",
                    "title": "ITD - Terms of Sale/Deferred Terms of Sale",
                    "description": "To specify terms of sale",
                    "segmentIdentifier": "ITD",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "ITD01": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "ITD01 - Terms Type Code",
                        "description": "Code identifying type of payment terms",
                        "elementIdentifier": "ITD01"
                      },
                      "ITD02": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "ITD02 - Terms Basis Date Code",
                        "description": "Code identifying the beginning of the terms period",
                        "elementIdentifier": "ITD02"
                      },
                      "ITD03": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "ITD03 - Terms Discount Percent",
                        "description": "Terms discount percentage, expressed as a percent, available to the purchaser if an invoice is paid on or before the Terms Discount Due Date",
                        "elementIdentifier": "ITD03"
                      },
                      "ITD04": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "ITD04 - Terms Discount Due Date",
                        "description": "Date payment is due if discount is to be earned expressed in format CCYYMMDD",
                        "elementIdentifier": "ITD04"
                      },
                      "ITD05": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "ITD05 - Terms Discount Days Due",
                        "description": "Number of days in the terms discount period by which payment is due if terms discount is earned",
                        "elementIdentifier": "ITD05"
                      },
                      "ITD06": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "ITD06 - Terms Net Due Date",
                        "description": "Date when total invoice amount becomes due expressed in format CCYYMMDD",
                        "elementIdentifier": "ITD06"
                      },
                      "ITD07": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "ITD07 - Terms Net Days",
                        "description": "Number of days until total invoice amount is due (discount not applicable)",
                        "elementIdentifier": "ITD07"
                      },
                      "ITD08": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "ITD08 - Terms Discount Amount",
                        "description": "Total amount of terms discount",
                        "elementIdentifier": "ITD08"
                      },
                      "ITD09": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "ITD09 - Terms Deferred Due Date",
                        "description": "Date deferred payment or percent of invoice payable is due expressed in format CCYYMMDD",
                        "elementIdentifier": "ITD09"
                      },
                      "ITD10": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "ITD10 - Deferred Amount Due",
                        "description": "Deferred amount due for payment",
                        "elementIdentifier": "ITD10"
                      },
                      "ITD11": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "ITD11 - Percent of Invoice Payable",
                        "description": "Amount of invoice payable expressed in percent",
                        "elementIdentifier": "ITD11"
                      },
                      "ITD12": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "ITD12 - Description",
                        "description": "A free-form description to clarify the related data elements and their content",
                        "elementIdentifier": "ITD12"
                      },
                      "ITD13": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "ITD13 - Day of Month",
                        "description": "The numeric value of the day of the month between 1 and the maximum day of the month being referenced",
                        "elementIdentifier": "ITD13"
                      },
                      "ITD14": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "ITD14 - Payment Method Code",
                        "description": "Code identifying type of payment procedures",
                        "elementIdentifier": "ITD14"
                      },
                      "ITD15": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "ITD15 - Percent",
                        "description": "Percentage expressed as a decimal",
                        "elementIdentifier": "ITD15"
                      }
                    }
                  }
                },
                "REF": {
                  "schemaType": "segmentArray",
                  "type": "array",
                  "items": {
                    "schemaType": "segment",
                    "title": "REF - Reference Identification",
                    "description": "To specify identifying information",
                    "segmentIdentifier": "REF",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "REF01": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "REF01 - Reference Identification Qualifier",
                        "description": "Code qualifying the Reference Identification",
                        "elementIdentifier": "REF01"
                      },
                      "REF02": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "REF02 - Reference Identification",
                        "description": "Reference information as defined for a particular Transaction Set or as specified by the Reference Identification Qualifier",
                        "elementIdentifier": "REF02"
                      },
                      "REF03": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "REF03 - Description",
                        "description": "A free-form description to clarify the related data elements and their content",
                        "elementIdentifier": "REF03"
                      },
                      "REF0401": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "REF0401 - Reference Identification Qualifier",
                        "description": "Code qualifying the Reference Identification",
                        "elementIdentifier": "REF0401"
                      },
                      "REF0402": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "REF0402 - Reference Identification",
                        "description": "Reference information as defined for a particular Transaction Set or as specified by the Reference Identification Qualifier",
                        "elementIdentifier": "REF0402"
                      },
                      "REF0403": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "REF0403 - Reference Identification Qualifier",
                        "description": "Code qualifying the Reference Identification",
                        "elementIdentifier": "REF0403"
                      },
                      "REF0404": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "REF0404 - Reference Identification",
                        "description": "Reference information as defined for a particular Transaction Set or as specified by the Reference Identification Qualifier",
                        "elementIdentifier": "REF0404"
                      },
                      "REF0405": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "REF0405 - Reference Identification Qualifier",
                        "description": "Code qualifying the Reference Identification",
                        "elementIdentifier": "REF0405"
                      },
                      "REF0406": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "REF0406 - Reference Identification",
                        "description": "Reference information as defined for a particular Transaction Set or as specified by the Reference Identification Qualifier",
                        "elementIdentifier": "REF0406"
                      }
                    }
                  }
                },
                "YNQ": {
                  "schemaType": "segmentArray",
                  "type": "array",
                  "items": {
                    "schemaType": "segment",
                    "title": "YNQ - Yes/No Question",
                    "description": "To identify and answer yes and no questions, including the date, time, and comments further qualifying the condition",
                    "segmentIdentifier": "YNQ",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "YNQ01": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "YNQ01 - Condition Indicator",
                        "description": "Code indicating a condition",
                        "elementIdentifier": "YNQ01"
                      },
                      "YNQ02": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "YNQ02 - Yes/No Condition or Response Code",
                        "description": "Code indicating a Yes or No condition or response",
                        "elementIdentifier": "YNQ02"
                      },
                      "YNQ03": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "YNQ03 - Date Time Period Format Qualifier",
                        "description": "Code indicating the date format, time format, or date and time format",
                        "elementIdentifier": "YNQ03"
                      },
                      "YNQ04": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "YNQ04 - Date Time Period",
                        "description": "Expression of a date, a time, or range of dates, times or dates and times",
                        "elementIdentifier": "YNQ04"
                      },
                      "YNQ05": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "YNQ05 - Free-Form Message Text",
                        "description": "Free-form message text",
                        "elementIdentifier": "YNQ05"
                      },
                      "YNQ06": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "YNQ06 - Free-Form Message Text",
                        "description": "Free-form message text",
                        "elementIdentifier": "YNQ06"
                      },
                      "YNQ07": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "YNQ07 - Free-Form Message Text",
                        "description": "Free-form message text",
                        "elementIdentifier": "YNQ07"
                      },
                      "YNQ08": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "YNQ08 - Code List Qualifier Code",
                        "description": "Code identifying a specific industry code list",
                        "elementIdentifier": "YNQ08"
                      },
                      "YNQ09": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "YNQ09 - Industry Code",
                        "description": "Code indicating a code from a specific industry code list",
                        "elementIdentifier": "YNQ09"
                      },
                      "YNQ10": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "YNQ10 - Free-Form Message Text",
                        "description": "Free-form message text",
                        "elementIdentifier": "YNQ10"
                      }
                    }
                  }
                },
                "PER": {
                  "schemaType": "segmentArray",
                  "type": "array",
                  "items": {
                    "schemaType": "segment",
                    "title": "PER - Administrative Communications Contact",
                    "description": "To identify a person or office to whom administrative communications should be directed",
                    "segmentIdentifier": "PER",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "PER01": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PER01 - Contact Function Code",
                        "description": "Code identifying the major duty or responsibility of the person or group named",
                        "elementIdentifier": "PER01"
                      },
                      "PER02": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PER02 - Name",
                        "description": "Free-form name",
                        "elementIdentifier": "PER02"
                      },
                      "PER03": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PER03 - Communication Number Qualifier",
                        "description": "Code identifying the type of communication number",
                        "elementIdentifier": "PER03"
                      },
                      "PER04": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PER04 - Communication Number",
                        "description": "Complete communications number including country or area code when applicable",
                        "elementIdentifier": "PER04"
                      },
                      "PER05": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PER05 - Communication Number Qualifier",
                        "description": "Code identifying the type of communication number",
                        "elementIdentifier": "PER05"
                      },
                      "PER06": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PER06 - Communication Number",
                        "description": "Complete communications number including country or area code when applicable",
                        "elementIdentifier": "PER06"
                      },
                      "PER07": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PER07 - Communication Number Qualifier",
                        "description": "Code identifying the type of communication number",
                        "elementIdentifier": "PER07"
                      },
                      "PER08": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PER08 - Communication Number",
                        "description": "Complete communications number including country or area code when applicable",
                        "elementIdentifier": "PER08"
                      },
                      "PER09": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PER09 - Contact Inquiry Reference",
                        "description": "Additional reference number or description to clarify a contact number",
                        "elementIdentifier": "PER09"
                      }
                    }
                  }
                },
                "SDQ": {
                  "schemaType": "segmentArray",
                  "type": "array",
                  "items": {
                    "schemaType": "segment",
                    "title": "SDQ - Destination Quantity",
                    "description": "To specify destination and quantity detail",
                    "segmentIdentifier": "SDQ",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "SDQ01": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SDQ01 - Unit or Basis for Measurement Code",
                        "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                        "elementIdentifier": "SDQ01"
                      },
                      "SDQ02": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SDQ02 - Identification Code Qualifier",
                        "description": "Code designating the system/method of code structure used for Identification Code (67)",
                        "elementIdentifier": "SDQ02"
                      },
                      "SDQ03": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SDQ03 - Identification Code",
                        "description": "Code identifying a party or other code",
                        "elementIdentifier": "SDQ03"
                      },
                      "SDQ04": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SDQ04 - Quantity",
                        "description": "Numeric value of quantity",
                        "elementIdentifier": "SDQ04"
                      },
                      "SDQ05": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SDQ05 - Identification Code",
                        "description": "Code identifying a party or other code",
                        "elementIdentifier": "SDQ05"
                      },
                      "SDQ06": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SDQ06 - Quantity",
                        "description": "Numeric value of quantity",
                        "elementIdentifier": "SDQ06"
                      },
                      "SDQ07": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SDQ07 - Identification Code",
                        "description": "Code identifying a party or other code",
                        "elementIdentifier": "SDQ07"
                      },
                      "SDQ08": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SDQ08 - Quantity",
                        "description": "Numeric value of quantity",
                        "elementIdentifier": "SDQ08"
                      },
                      "SDQ09": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SDQ09 - Identification Code",
                        "description": "Code identifying a party or other code",
                        "elementIdentifier": "SDQ09"
                      },
                      "SDQ10": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SDQ10 - Quantity",
                        "description": "Numeric value of quantity",
                        "elementIdentifier": "SDQ10"
                      },
                      "SDQ11": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SDQ11 - Identification Code",
                        "description": "Code identifying a party or other code",
                        "elementIdentifier": "SDQ11"
                      },
                      "SDQ12": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SDQ12 - Quantity",
                        "description": "Numeric value of quantity",
                        "elementIdentifier": "SDQ12"
                      },
                      "SDQ13": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SDQ13 - Identification Code",
                        "description": "Code identifying a party or other code",
                        "elementIdentifier": "SDQ13"
                      },
                      "SDQ14": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SDQ14 - Quantity",
                        "description": "Numeric value of quantity",
                        "elementIdentifier": "SDQ14"
                      },
                      "SDQ15": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SDQ15 - Identification Code",
                        "description": "Code identifying a party or other code",
                        "elementIdentifier": "SDQ15"
                      },
                      "SDQ16": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SDQ16 - Quantity",
                        "description": "Numeric value of quantity",
                        "elementIdentifier": "SDQ16"
                      },
                      "SDQ17": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SDQ17 - Identification Code",
                        "description": "Code identifying a party or other code",
                        "elementIdentifier": "SDQ17"
                      },
                      "SDQ18": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SDQ18 - Quantity",
                        "description": "Numeric value of quantity",
                        "elementIdentifier": "SDQ18"
                      },
                      "SDQ19": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SDQ19 - Identification Code",
                        "description": "Code identifying a party or other code",
                        "elementIdentifier": "SDQ19"
                      },
                      "SDQ20": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SDQ20 - Quantity",
                        "description": "Numeric value of quantity",
                        "elementIdentifier": "SDQ20"
                      },
                      "SDQ21": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SDQ21 - Identification Code",
                        "description": "Code identifying a party or other code",
                        "elementIdentifier": "SDQ21"
                      },
                      "SDQ22": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SDQ22 - Quantity",
                        "description": "Numeric value of quantity",
                        "elementIdentifier": "SDQ22"
                      },
                      "SDQ23": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SDQ23 - Location Identifier",
                        "description": "Code which identifies a specific location",
                        "elementIdentifier": "SDQ23"
                      }
                    }
                  }
                },
                "DTM": {
                  "schemaType": "segmentArray",
                  "type": "array",
                  "items": {
                    "schemaType": "segment",
                    "title": "DTM - Date/Time Reference",
                    "description": "To specify pertinent dates and times",
                    "segmentIdentifier": "DTM",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "DTM01": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "DTM01 - Date/Time Qualifier",
                        "description": "Code specifying type of date or time, or both date and time",
                        "elementIdentifier": "DTM01"
                      },
                      "DTM02": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "DTM02 - Date",
                        "description": "Date expressed as CCYYMMDD",
                        "elementIdentifier": "DTM02"
                      },
                      "DTM03": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "DTM03 - Time",
                        "description": "Time expressed in 24-hour clock time as follows: HHMM, or HHMMSS, or HHMMSSD, or HHMMSSDD, where H = hours (00-23), M = minutes (00-59), S = integer seconds (00-59) and DD = decimal seconds; decimal seconds are expressed as follows: D = tenths (0-9) and DD = hundredths (00-99)",
                        "elementIdentifier": "DTM03"
                      },
                      "DTM04": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "DTM04 - Time Code",
                        "description": "Code identifying the time. In accordance with International Standards Organization standard 8601, time can be specified by a + or - and an indication in hours in relation to Universal Time Coordinate (UTC) time; since + is a restricted character, + and - are substituted by P and M in the codes that follow",
                        "elementIdentifier": "DTM04"
                      },
                      "DTM05": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "DTM05 - Date Time Period Format Qualifier",
                        "description": "Code indicating the date format, time format, or date and time format",
                        "elementIdentifier": "DTM05"
                      },
                      "DTM06": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "DTM06 - Date Time Period",
                        "description": "Expression of a date, a time, or range of dates, times or dates and times",
                        "elementIdentifier": "DTM06"
                      }
                    }
                  }
                },
                "CAD": {
                  "schemaType": "segmentArray",
                  "type": "array",
                  "items": {
                    "schemaType": "segment",
                    "title": "CAD - Carrier Detail",
                    "description": "To specify transportation details for the transaction",
                    "segmentIdentifier": "CAD",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "CAD01": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CAD01 - Transportation Method/Type Code",
                        "description": "Code specifying the method or type of transportation for the shipment",
                        "elementIdentifier": "CAD01"
                      },
                      "CAD02": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CAD02 - Equipment Initial",
                        "description": "Prefix or alphabetic part of an equipment unit's identifying number",
                        "elementIdentifier": "CAD02"
                      },
                      "CAD03": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CAD03 - Equipment Number",
                        "description": "Sequencing or serial part of an equipment unit's identifying number (pure numeric form for equipment number is preferred)",
                        "elementIdentifier": "CAD03"
                      },
                      "CAD04": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CAD04 - Standard Carrier Alpha Code",
                        "description": "Standard Carrier Alpha Code",
                        "elementIdentifier": "CAD04"
                      },
                      "CAD05": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CAD05 - Routing",
                        "description": "Free-form description of the routing or requested routing for shipment, or the originating carrier's identity",
                        "elementIdentifier": "CAD05"
                      },
                      "CAD06": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CAD06 - Shipment/Order Status Code",
                        "description": "Code indicating the status of an order or shipment or the disposition of any difference between the quantity ordered and the quantity shipped for a line item or transaction",
                        "elementIdentifier": "CAD06"
                      },
                      "CAD07": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CAD07 - Reference Identification Qualifier",
                        "description": "Code qualifying the Reference Identification",
                        "elementIdentifier": "CAD07"
                      },
                      "CAD08": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CAD08 - Reference Identification",
                        "description": "Reference information as defined for a particular Transaction Set or as specified by the Reference Identification Qualifier",
                        "elementIdentifier": "CAD08"
                      },
                      "CAD09": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "CAD09 - Service Level Code",
                        "description": "Code indicating the level of transportation service or the billing service offered by the transportation carrier",
                        "elementIdentifier": "CAD09"
                      }
                    }
                  }
                },
                "L7": {
                  "schemaType": "segmentArray",
                  "type": "array",
                  "items": {
                    "schemaType": "segment",
                    "title": "L7 - Tariff Reference",
                    "description": "To reference details of the tariff used to arrive at applicable rates or charge",
                    "segmentIdentifier": "L7",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "L701": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "L701 - Lading Line Item Number",
                        "description": "Sequential line number for a lading item",
                        "elementIdentifier": "L701"
                      },
                      "L702": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "L702 - Tariff Agency Code",
                        "description": "Code defining the tariff bureau or tariff publishing agent that governs the rates applied to this shipment",
                        "elementIdentifier": "L702"
                      },
                      "L703": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "L703 - Tariff Number",
                        "description": "Standard tariff number for the tariff which governs the rates applied to the commodity item(s)",
                        "elementIdentifier": "L703"
                      },
                      "L704": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "L704 - Tariff Section",
                        "description": "Number used as an extension of the basic tariff number to identify the rates published within specific sections of the tariff",
                        "elementIdentifier": "L704"
                      },
                      "L705": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "L705 - Tariff Item Number",
                        "description": "Number assigned in the tariff to specific rate or group of rates that applies to one or more items in the shipment",
                        "elementIdentifier": "L705"
                      },
                      "L706": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "L706 - Tariff Item Part",
                        "description": "Number assigned to subsection of a specific tariff item (arbitrary)",
                        "elementIdentifier": "L706"
                      },
                      "L707": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "L707 - Freight Class Code",
                        "description": "Code indicating generalized classification that applies to one or more items in the shipment, i.e., class 70, 77.5, etc.",
                        "elementIdentifier": "L707"
                      },
                      "L708": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "L708 - Tariff Supplement Identifier",
                        "description": "Identifier for the tariff supplement which contains the rate used",
                        "elementIdentifier": "L708"
                      },
                      "L709": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "L709 - Ex Parte",
                        "description": "Level of rates as published in the tariff",
                        "elementIdentifier": "L709"
                      },
                      "L710": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "L710 - Date",
                        "description": "Date expressed as CCYYMMDD",
                        "elementIdentifier": "L710"
                      },
                      "L711": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "L711 - Rate Basis Number",
                        "description": "The (mileage) factor published for rating purposes in the appropriate tariff",
                        "elementIdentifier": "L711"
                      },
                      "L712": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "L712 - Tariff Column",
                        "description": "A tariff commodity classification that is used, as a means of control, for grouping of commodities in tariff applications",
                        "elementIdentifier": "L712"
                      },
                      "L713": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "L713 - Tariff Distance",
                        "description": "Distance on which the rate for a shipment is based",
                        "elementIdentifier": "L713"
                      },
                      "L714": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "L714 - Distance Qualifier",
                        "description": "Code identifying the distance unit",
                        "elementIdentifier": "L714"
                      },
                      "L715": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "L715 - City Name",
                        "description": "Free-form text for city name",
                        "elementIdentifier": "L715"
                      },
                      "L716": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "L716 - State or Province Code",
                        "description": "Code (Standard State/Province) as defined by appropriate government agency",
                        "elementIdentifier": "L716"
                      }
                    }
                  }
                },
                "SR": {
                  "schemaType": "segmentArray",
                  "type": "array",
                  "items": {
                    "schemaType": "segment",
                    "title": "SR - Requested Service Schedule",
                    "description": "To identify requested service schedules",
                    "segmentIdentifier": "SR",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "SR01": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SR01 - Assigned Identification",
                        "description": "Alphanumeric characters assigned for differentiation within a transaction set",
                        "elementIdentifier": "SR01"
                      },
                      "SR02": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SR02 - Day Rotation",
                        "description": "Days of week expressed in a seven-day rotation period starting with Monday = 1; a Monday - Friday would be shown as (12345)",
                        "elementIdentifier": "SR02"
                      },
                      "SR03": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SR03 - Time",
                        "description": "Time expressed in 24-hour clock time as follows: HHMM, or HHMMSS, or HHMMSSD, or HHMMSSDD, where H = hours (00-23), M = minutes (00-59), S = integer seconds (00-59) and DD = decimal seconds; decimal seconds are expressed as follows: D = tenths (0-9) and DD = hundredths (00-99)",
                        "elementIdentifier": "SR03"
                      },
                      "SR04": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SR04 - Time",
                        "description": "Time expressed in 24-hour clock time as follows: HHMM, or HHMMSS, or HHMMSSD, or HHMMSSDD, where H = hours (00-23), M = minutes (00-59), S = integer seconds (00-59) and DD = decimal seconds; decimal seconds are expressed as follows: D = tenths (0-9) and DD = hundredths (00-99)",
                        "elementIdentifier": "SR04"
                      },
                      "SR05": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SR05 - Free Form Message",
                        "description": "Free-form text",
                        "elementIdentifier": "SR05"
                      },
                      "SR06": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SR06 - Unit Price",
                        "description": "Price per unit of product, service, commodity, etc.",
                        "elementIdentifier": "SR06"
                      },
                      "SR07": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SR07 - Quantity",
                        "description": "Numeric value of quantity",
                        "elementIdentifier": "SR07"
                      },
                      "SR08": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SR08 - Date",
                        "description": "Date expressed as CCYYMMDD",
                        "elementIdentifier": "SR08"
                      },
                      "SR09": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SR09 - Date",
                        "description": "Date expressed as CCYYMMDD",
                        "elementIdentifier": "SR09"
                      },
                      "SR10": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SR10 - Product/Service ID",
                        "description": "Identifying number for a product or service",
                        "elementIdentifier": "SR10"
                      },
                      "SR11": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SR11 - Product/Service ID",
                        "description": "Identifying number for a product or service",
                        "elementIdentifier": "SR11"
                      }
                    }
                  }
                },
                "SAC_loop": {
                  "schemaType": "loopArray",
                  "type": "array",
                  "loopContents": "SAC-TXI",
                  "minItems": 1,
                  "items": {
                    "schemaType": "loop",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "SAC": {
                        "schemaType": "segmentArray",
                        "type": "array",
                        "items": {
                          "schemaType": "segment",
                          "title": "SAC - Service, Promotion, Allowance, or Charge Information",
                          "description": "To request or identify a service, promotion, allowance, or charge; to specify the amount or percentage for the service, promotion, allowance, or charge",
                          "segmentIdentifier": "SAC",
                          "type": "object",
                          "minProperties": 1,
                          "additionalProperties": false,
                          "properties": {
                            "SAC01": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SAC01 - Allowance or Charge Indicator",
                              "description": "Code which indicates an allowance or charge for the service specified",
                              "elementIdentifier": "SAC01"
                            },
                            "SAC02": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SAC02 - Service, Promotion, Allowance, or Charge Code",
                              "description": "Code identifying the service, promotion, allowance, or charge",
                              "elementIdentifier": "SAC02"
                            },
                            "SAC03": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SAC03 - Agency Qualifier Code",
                              "description": "Code identifying the agency assigning the code values",
                              "elementIdentifier": "SAC03"
                            },
                            "SAC04": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SAC04 - Agency Service, Promotion, Allowance, or Charge Code",
                              "description": "Agency maintained code identifying the service, promotion, allowance, or charge",
                              "elementIdentifier": "SAC04"
                            },
                            "SAC05": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SAC05 - Amount",
                              "description": "Monetary amount",
                              "elementIdentifier": "SAC05"
                            },
                            "SAC06": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SAC06 - Allowance/Charge Percent Qualifier",
                              "description": "Code indicating on what basis allowance or charge percent is calculated",
                              "elementIdentifier": "SAC06"
                            },
                            "SAC07": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SAC07 - Percent",
                              "description": "Percent expressed as a percent",
                              "elementIdentifier": "SAC07"
                            },
                            "SAC08": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SAC08 - Rate",
                              "description": "Rate expressed in the standard monetary denomination for the currency specified",
                              "elementIdentifier": "SAC08"
                            },
                            "SAC09": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SAC09 - Unit or Basis for Measurement Code",
                              "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                              "elementIdentifier": "SAC09"
                            },
                            "SAC10": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SAC10 - Quantity",
                              "description": "Numeric value of quantity",
                              "elementIdentifier": "SAC10"
                            },
                            "SAC11": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SAC11 - Quantity",
                              "description": "Numeric value of quantity",
                              "elementIdentifier": "SAC11"
                            },
                            "SAC12": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SAC12 - Allowance or Charge Method of Handling Code",
                              "description": "Code indicating method of handling for an allowance or charge",
                              "elementIdentifier": "SAC12"
                            },
                            "SAC13": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SAC13 - Reference Identification",
                              "description": "Reference information as defined for a particular Transaction Set or as specified by the Reference Identification Qualifier",
                              "elementIdentifier": "SAC13"
                            },
                            "SAC14": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SAC14 - Option Number",
                              "description": "A unique number identifying available promotion or allowance options when more than one is offered",
                              "elementIdentifier": "SAC14"
                            },
                            "SAC15": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SAC15 - Description",
                              "description": "A free-form description to clarify the related data elements and their content",
                              "elementIdentifier": "SAC15"
                            },
                            "SAC16": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SAC16 - Language Code",
                              "description": "Code designating the language used in text, from a standard code list maintained by the International Standards Organization (ISO 639)",
                              "elementIdentifier": "SAC16"
                            }
                          }
                        }
                      },
                      "TXI": {
                        "schemaType": "segmentArray",
                        "type": "array",
                        "items": {
                          "schemaType": "segment",
                          "title": "TXI - Tax Information",
                          "description": "To specify tax information",
                          "segmentIdentifier": "TXI",
                          "type": "object",
                          "minProperties": 1,
                          "additionalProperties": false,
                          "properties": {
                            "TXI01": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "TXI01 - Tax Type Code",
                              "description": "Code specifying the type of tax",
                              "elementIdentifier": "TXI01"
                            },
                            "TXI02": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "TXI02 - Monetary Amount",
                              "description": "Monetary amount",
                              "elementIdentifier": "TXI02"
                            },
                            "TXI03": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "TXI03 - Percent",
                              "description": "Percentage expressed as a decimal",
                              "elementIdentifier": "TXI03"
                            },
                            "TXI04": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "TXI04 - Tax Jurisdiction Code Qualifier",
                              "description": "Code identifying the source of the data used in tax jurisdiction code",
                              "elementIdentifier": "TXI04"
                            },
                            "TXI05": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "TXI05 - Tax Jurisdiction Code",
                              "description": "Code identifying the taxing jurisdiction",
                              "elementIdentifier": "TXI05"
                            },
                            "TXI06": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "TXI06 - Tax Exempt Code",
                              "description": "Code identifying exemption status from sales and use tax",
                              "elementIdentifier": "TXI06"
                            },
                            "TXI07": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "TXI07 - Relationship Code",
                              "description": "Code indicating the relationship between entities",
                              "elementIdentifier": "TXI07"
                            },
                            "TXI08": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "TXI08 - Dollar Basis For Percent",
                              "description": "Dollar basis to be used in the percent calculation of the allowance, charge or tax",
                              "elementIdentifier": "TXI08"
                            },
                            "TXI09": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "TXI09 - Tax Identification Number",
                              "description": "Number assigned to a purchaser (buyer, orderer) by a taxing jurisdiction (state, county, etc.); often called a tax exemption number or certificate number",
                              "elementIdentifier": "TXI09"
                            },
                            "TXI10": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "TXI10 - Assigned Identification",
                              "description": "Alphanumeric characters assigned for differentiation within a transaction set",
                              "elementIdentifier": "TXI10"
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "SLN_loop": {
                  "schemaType": "loopArray",
                  "type": "array",
                  "loopContents": "SLN-DTM-REF-PID-SAC-TC2-TXI",
                  "minItems": 1,
                  "items": {
                    "schemaType": "loop",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "SLN": {
                        "schemaType": "segmentArray",
                        "type": "array",
                        "items": {
                          "schemaType": "segment",
                          "title": "SLN - Subline Item Detail",
                          "description": "To specify product subline detail item data",
                          "segmentIdentifier": "SLN",
                          "type": "object",
                          "minProperties": 1,
                          "additionalProperties": false,
                          "properties": {
                            "SLN01": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SLN01 - Assigned Identification",
                              "description": "Alphanumeric characters assigned for differentiation within a transaction set",
                              "elementIdentifier": "SLN01"
                            },
                            "SLN02": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SLN02 - Assigned Identification",
                              "description": "Alphanumeric characters assigned for differentiation within a transaction set",
                              "elementIdentifier": "SLN02"
                            },
                            "SLN03": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SLN03 - Relationship Code",
                              "description": "Code indicating the relationship between entities",
                              "elementIdentifier": "SLN03"
                            },
                            "SLN04": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SLN04 - Quantity",
                              "description": "Numeric value of quantity",
                              "elementIdentifier": "SLN04"
                            },
                            "SLN0501": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SLN0501 - Unit or Basis for Measurement Code",
                              "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                              "elementIdentifier": "SLN0501"
                            },
                            "SLN0502": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SLN0502 - Exponent",
                              "description": "Power to which a unit is raised",
                              "elementIdentifier": "SLN0502"
                            },
                            "SLN0503": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SLN0503 - Multiplier",
                              "description": "Value to be used as a multiplier to obtain a new value",
                              "elementIdentifier": "SLN0503"
                            },
                            "SLN0504": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SLN0504 - Unit or Basis for Measurement Code",
                              "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                              "elementIdentifier": "SLN0504"
                            },
                            "SLN0505": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SLN0505 - Exponent",
                              "description": "Power to which a unit is raised",
                              "elementIdentifier": "SLN0505"
                            },
                            "SLN0506": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SLN0506 - Multiplier",
                              "description": "Value to be used as a multiplier to obtain a new value",
                              "elementIdentifier": "SLN0506"
                            },
                            "SLN0507": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SLN0507 - Unit or Basis for Measurement Code",
                              "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                              "elementIdentifier": "SLN0507"
                            },
                            "SLN0508": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SLN0508 - Exponent",
                              "description": "Power to which a unit is raised",
                              "elementIdentifier": "SLN0508"
                            },
                            "SLN0509": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SLN0509 - Multiplier",
                              "description": "Value to be used as a multiplier to obtain a new value",
                              "elementIdentifier": "SLN0509"
                            },
                            "SLN0510": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SLN0510 - Unit or Basis for Measurement Code",
                              "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                              "elementIdentifier": "SLN0510"
                            },
                            "SLN0511": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SLN0511 - Exponent",
                              "description": "Power to which a unit is raised",
                              "elementIdentifier": "SLN0511"
                            },
                            "SLN0512": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SLN0512 - Multiplier",
                              "description": "Value to be used as a multiplier to obtain a new value",
                              "elementIdentifier": "SLN0512"
                            },
                            "SLN0513": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SLN0513 - Unit or Basis for Measurement Code",
                              "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                              "elementIdentifier": "SLN0513"
                            },
                            "SLN0514": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SLN0514 - Exponent",
                              "description": "Power to which a unit is raised",
                              "elementIdentifier": "SLN0514"
                            },
                            "SLN0515": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SLN0515 - Multiplier",
                              "description": "Value to be used as a multiplier to obtain a new value",
                              "elementIdentifier": "SLN0515"
                            },
                            "SLN06": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SLN06 - Unit Price",
                              "description": "Price per unit of product, service, commodity, etc.",
                              "elementIdentifier": "SLN06"
                            },
                            "SLN07": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SLN07 - Basis of Unit Price Code",
                              "description": "Code identifying the type of unit price for an item",
                              "elementIdentifier": "SLN07"
                            },
                            "SLN08": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SLN08 - Relationship Code",
                              "description": "Code indicating the relationship between entities",
                              "elementIdentifier": "SLN08"
                            },
                            "SLN09": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SLN09 - Product/Service ID Qualifier",
                              "description": "Code identifying the type/source of the descriptive number used in Product/Service ID (234)",
                              "elementIdentifier": "SLN09"
                            },
                            "SLN10": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SLN10 - Product/Service ID",
                              "description": "Identifying number for a product or service",
                              "elementIdentifier": "SLN10"
                            },
                            "SLN11": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SLN11 - Product/Service ID Qualifier",
                              "description": "Code identifying the type/source of the descriptive number used in Product/Service ID (234)",
                              "elementIdentifier": "SLN11"
                            },
                            "SLN12": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SLN12 - Product/Service ID",
                              "description": "Identifying number for a product or service",
                              "elementIdentifier": "SLN12"
                            },
                            "SLN13": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SLN13 - Product/Service ID Qualifier",
                              "description": "Code identifying the type/source of the descriptive number used in Product/Service ID (234)",
                              "elementIdentifier": "SLN13"
                            },
                            "SLN14": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SLN14 - Product/Service ID",
                              "description": "Identifying number for a product or service",
                              "elementIdentifier": "SLN14"
                            },
                            "SLN15": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SLN15 - Product/Service ID Qualifier",
                              "description": "Code identifying the type/source of the descriptive number used in Product/Service ID (234)",
                              "elementIdentifier": "SLN15"
                            },
                            "SLN16": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SLN16 - Product/Service ID",
                              "description": "Identifying number for a product or service",
                              "elementIdentifier": "SLN16"
                            },
                            "SLN17": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SLN17 - Product/Service ID Qualifier",
                              "description": "Code identifying the type/source of the descriptive number used in Product/Service ID (234)",
                              "elementIdentifier": "SLN17"
                            },
                            "SLN18": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SLN18 - Product/Service ID",
                              "description": "Identifying number for a product or service",
                              "elementIdentifier": "SLN18"
                            },
                            "SLN19": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SLN19 - Product/Service ID Qualifier",
                              "description": "Code identifying the type/source of the descriptive number used in Product/Service ID (234)",
                              "elementIdentifier": "SLN19"
                            },
                            "SLN20": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SLN20 - Product/Service ID",
                              "description": "Identifying number for a product or service",
                              "elementIdentifier": "SLN20"
                            },
                            "SLN21": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SLN21 - Product/Service ID Qualifier",
                              "description": "Code identifying the type/source of the descriptive number used in Product/Service ID (234)",
                              "elementIdentifier": "SLN21"
                            },
                            "SLN22": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SLN22 - Product/Service ID",
                              "description": "Identifying number for a product or service",
                              "elementIdentifier": "SLN22"
                            },
                            "SLN23": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SLN23 - Product/Service ID Qualifier",
                              "description": "Code identifying the type/source of the descriptive number used in Product/Service ID (234)",
                              "elementIdentifier": "SLN23"
                            },
                            "SLN24": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SLN24 - Product/Service ID",
                              "description": "Identifying number for a product or service",
                              "elementIdentifier": "SLN24"
                            },
                            "SLN25": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SLN25 - Product/Service ID Qualifier",
                              "description": "Code identifying the type/source of the descriptive number used in Product/Service ID (234)",
                              "elementIdentifier": "SLN25"
                            },
                            "SLN26": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SLN26 - Product/Service ID",
                              "description": "Identifying number for a product or service",
                              "elementIdentifier": "SLN26"
                            },
                            "SLN27": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SLN27 - Product/Service ID Qualifier",
                              "description": "Code identifying the type/source of the descriptive number used in Product/Service ID (234)",
                              "elementIdentifier": "SLN27"
                            },
                            "SLN28": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SLN28 - Product/Service ID",
                              "description": "Identifying number for a product or service",
                              "elementIdentifier": "SLN28"
                            }
                          }
                        }
                      },
                      "DTM": {
                        "schemaType": "segmentArray",
                        "type": "array",
                        "items": {
                          "schemaType": "segment",
                          "title": "DTM - Date/Time Reference",
                          "description": "To specify pertinent dates and times",
                          "segmentIdentifier": "DTM",
                          "type": "object",
                          "minProperties": 1,
                          "additionalProperties": false,
                          "properties": {
                            "DTM01": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "DTM01 - Date/Time Qualifier",
                              "description": "Code specifying type of date or time, or both date and time",
                              "elementIdentifier": "DTM01"
                            },
                            "DTM02": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "DTM02 - Date",
                              "description": "Date expressed as CCYYMMDD",
                              "elementIdentifier": "DTM02"
                            },
                            "DTM03": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "DTM03 - Time",
                              "description": "Time expressed in 24-hour clock time as follows: HHMM, or HHMMSS, or HHMMSSD, or HHMMSSDD, where H = hours (00-23), M = minutes (00-59), S = integer seconds (00-59) and DD = decimal seconds; decimal seconds are expressed as follows: D = tenths (0-9) and DD = hundredths (00-99)",
                              "elementIdentifier": "DTM03"
                            },
                            "DTM04": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "DTM04 - Time Code",
                              "description": "Code identifying the time. In accordance with International Standards Organization standard 8601, time can be specified by a + or - and an indication in hours in relation to Universal Time Coordinate (UTC) time; since + is a restricted character, + and - are substituted by P and M in the codes that follow",
                              "elementIdentifier": "DTM04"
                            },
                            "DTM05": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "DTM05 - Date Time Period Format Qualifier",
                              "description": "Code indicating the date format, time format, or date and time format",
                              "elementIdentifier": "DTM05"
                            },
                            "DTM06": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "DTM06 - Date Time Period",
                              "description": "Expression of a date, a time, or range of dates, times or dates and times",
                              "elementIdentifier": "DTM06"
                            }
                          }
                        }
                      },
                      "REF": {
                        "schemaType": "segmentArray",
                        "type": "array",
                        "items": {
                          "schemaType": "segment",
                          "title": "REF - Reference Identification",
                          "description": "To specify identifying information",
                          "segmentIdentifier": "REF",
                          "type": "object",
                          "minProperties": 1,
                          "additionalProperties": false,
                          "properties": {
                            "REF01": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "REF01 - Reference Identification Qualifier",
                              "description": "Code qualifying the Reference Identification",
                              "elementIdentifier": "REF01"
                            },
                            "REF02": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "REF02 - Reference Identification",
                              "description": "Reference information as defined for a particular Transaction Set or as specified by the Reference Identification Qualifier",
                              "elementIdentifier": "REF02"
                            },
                            "REF03": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "REF03 - Description",
                              "description": "A free-form description to clarify the related data elements and their content",
                              "elementIdentifier": "REF03"
                            },
                            "REF0401": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "REF0401 - Reference Identification Qualifier",
                              "description": "Code qualifying the Reference Identification",
                              "elementIdentifier": "REF0401"
                            },
                            "REF0402": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "REF0402 - Reference Identification",
                              "description": "Reference information as defined for a particular Transaction Set or as specified by the Reference Identification Qualifier",
                              "elementIdentifier": "REF0402"
                            },
                            "REF0403": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "REF0403 - Reference Identification Qualifier",
                              "description": "Code qualifying the Reference Identification",
                              "elementIdentifier": "REF0403"
                            },
                            "REF0404": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "REF0404 - Reference Identification",
                              "description": "Reference information as defined for a particular Transaction Set or as specified by the Reference Identification Qualifier",
                              "elementIdentifier": "REF0404"
                            },
                            "REF0405": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "REF0405 - Reference Identification Qualifier",
                              "description": "Code qualifying the Reference Identification",
                              "elementIdentifier": "REF0405"
                            },
                            "REF0406": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "REF0406 - Reference Identification",
                              "description": "Reference information as defined for a particular Transaction Set or as specified by the Reference Identification Qualifier",
                              "elementIdentifier": "REF0406"
                            }
                          }
                        }
                      },
                      "PID": {
                        "schemaType": "segmentArray",
                        "type": "array",
                        "items": {
                          "schemaType": "segment",
                          "title": "PID - Product/Item Description",
                          "description": "To describe a product or process in coded or free-form format",
                          "segmentIdentifier": "PID",
                          "type": "object",
                          "minProperties": 1,
                          "additionalProperties": false,
                          "properties": {
                            "PID01": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "PID01 - Item Description Type",
                              "description": "Code indicating the format of a description",
                              "elementIdentifier": "PID01"
                            },
                            "PID02": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "PID02 - Product/Process Characteristic Code",
                              "description": "Code identifying the general class of a product or process characteristic",
                              "elementIdentifier": "PID02"
                            },
                            "PID03": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "PID03 - Agency Qualifier Code",
                              "description": "Code identifying the agency assigning the code values",
                              "elementIdentifier": "PID03"
                            },
                            "PID04": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "PID04 - Product Description Code",
                              "description": "A code from an industry code list which provides specific data about a product characteristic",
                              "elementIdentifier": "PID04"
                            },
                            "PID05": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "PID05 - Description",
                              "description": "A free-form description to clarify the related data elements and their content",
                              "elementIdentifier": "PID05"
                            },
                            "PID06": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "PID06 - Surface/Layer/Position Code",
                              "description": "Code indicating the product surface, layer or position that is being described",
                              "elementIdentifier": "PID06"
                            },
                            "PID07": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "PID07 - Source Subqualifier",
                              "description": "A reference that indicates the table or text maintained by the Source Qualifier",
                              "elementIdentifier": "PID07"
                            },
                            "PID08": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "PID08 - Yes/No Condition or Response Code",
                              "description": "Code indicating a Yes or No condition or response",
                              "elementIdentifier": "PID08"
                            },
                            "PID09": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "PID09 - Language Code",
                              "description": "Code designating the language used in text, from a standard code list maintained by the International Standards Organization (ISO 639)",
                              "elementIdentifier": "PID09"
                            }
                          }
                        }
                      },
                      "SAC": {
                        "schemaType": "segmentArray",
                        "type": "array",
                        "items": {
                          "schemaType": "segment",
                          "title": "SAC - Service, Promotion, Allowance, or Charge Information",
                          "description": "To request or identify a service, promotion, allowance, or charge; to specify the amount or percentage for the service, promotion, allowance, or charge",
                          "segmentIdentifier": "SAC",
                          "type": "object",
                          "minProperties": 1,
                          "additionalProperties": false,
                          "properties": {
                            "SAC01": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SAC01 - Allowance or Charge Indicator",
                              "description": "Code which indicates an allowance or charge for the service specified",
                              "elementIdentifier": "SAC01"
                            },
                            "SAC02": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SAC02 - Service, Promotion, Allowance, or Charge Code",
                              "description": "Code identifying the service, promotion, allowance, or charge",
                              "elementIdentifier": "SAC02"
                            },
                            "SAC03": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SAC03 - Agency Qualifier Code",
                              "description": "Code identifying the agency assigning the code values",
                              "elementIdentifier": "SAC03"
                            },
                            "SAC04": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SAC04 - Agency Service, Promotion, Allowance, or Charge Code",
                              "description": "Agency maintained code identifying the service, promotion, allowance, or charge",
                              "elementIdentifier": "SAC04"
                            },
                            "SAC05": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SAC05 - Amount",
                              "description": "Monetary amount",
                              "elementIdentifier": "SAC05"
                            },
                            "SAC06": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SAC06 - Allowance/Charge Percent Qualifier",
                              "description": "Code indicating on what basis allowance or charge percent is calculated",
                              "elementIdentifier": "SAC06"
                            },
                            "SAC07": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SAC07 - Percent",
                              "description": "Percent expressed as a percent",
                              "elementIdentifier": "SAC07"
                            },
                            "SAC08": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SAC08 - Rate",
                              "description": "Rate expressed in the standard monetary denomination for the currency specified",
                              "elementIdentifier": "SAC08"
                            },
                            "SAC09": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SAC09 - Unit or Basis for Measurement Code",
                              "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                              "elementIdentifier": "SAC09"
                            },
                            "SAC10": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SAC10 - Quantity",
                              "description": "Numeric value of quantity",
                              "elementIdentifier": "SAC10"
                            },
                            "SAC11": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SAC11 - Quantity",
                              "description": "Numeric value of quantity",
                              "elementIdentifier": "SAC11"
                            },
                            "SAC12": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SAC12 - Allowance or Charge Method of Handling Code",
                              "description": "Code indicating method of handling for an allowance or charge",
                              "elementIdentifier": "SAC12"
                            },
                            "SAC13": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SAC13 - Reference Identification",
                              "description": "Reference information as defined for a particular Transaction Set or as specified by the Reference Identification Qualifier",
                              "elementIdentifier": "SAC13"
                            },
                            "SAC14": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SAC14 - Option Number",
                              "description": "A unique number identifying available promotion or allowance options when more than one is offered",
                              "elementIdentifier": "SAC14"
                            },
                            "SAC15": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SAC15 - Description",
                              "description": "A free-form description to clarify the related data elements and their content",
                              "elementIdentifier": "SAC15"
                            },
                            "SAC16": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "SAC16 - Language Code",
                              "description": "Code designating the language used in text, from a standard code list maintained by the International Standards Organization (ISO 639)",
                              "elementIdentifier": "SAC16"
                            }
                          }
                        }
                      },
                      "TC2": {
                        "schemaType": "segmentArray",
                        "type": "array",
                        "items": {
                          "schemaType": "segment",
                          "title": "TC2 - Commodity",
                          "description": "To identify a commodity or a group of commodities or a tariff page commodity",
                          "segmentIdentifier": "TC2",
                          "type": "object",
                          "minProperties": 1,
                          "additionalProperties": false,
                          "properties": {
                            "TC201": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "TC201 - Commodity Code Qualifier",
                              "description": "Code identifying the commodity coding system used for Commodity Code",
                              "elementIdentifier": "TC201"
                            },
                            "TC202": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "TC202 - Commodity Code",
                              "description": "Code describing a commodity or group of commodities",
                              "elementIdentifier": "TC202"
                            }
                          }
                        }
                      },
                      "TXI": {
                        "schemaType": "segmentArray",
                        "type": "array",
                        "items": {
                          "schemaType": "segment",
                          "title": "TXI - Tax Information",
                          "description": "To specify tax information",
                          "segmentIdentifier": "TXI",
                          "type": "object",
                          "minProperties": 1,
                          "additionalProperties": false,
                          "properties": {
                            "TXI01": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "TXI01 - Tax Type Code",
                              "description": "Code specifying the type of tax",
                              "elementIdentifier": "TXI01"
                            },
                            "TXI02": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "TXI02 - Monetary Amount",
                              "description": "Monetary amount",
                              "elementIdentifier": "TXI02"
                            },
                            "TXI03": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "TXI03 - Percent",
                              "description": "Percentage expressed as a decimal",
                              "elementIdentifier": "TXI03"
                            },
                            "TXI04": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "TXI04 - Tax Jurisdiction Code Qualifier",
                              "description": "Code identifying the source of the data used in tax jurisdiction code",
                              "elementIdentifier": "TXI04"
                            },
                            "TXI05": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "TXI05 - Tax Jurisdiction Code",
                              "description": "Code identifying the taxing jurisdiction",
                              "elementIdentifier": "TXI05"
                            },
                            "TXI06": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "TXI06 - Tax Exempt Code",
                              "description": "Code identifying exemption status from sales and use tax",
                              "elementIdentifier": "TXI06"
                            },
                            "TXI07": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "TXI07 - Relationship Code",
                              "description": "Code indicating the relationship between entities",
                              "elementIdentifier": "TXI07"
                            },
                            "TXI08": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "TXI08 - Dollar Basis For Percent",
                              "description": "Dollar basis to be used in the percent calculation of the allowance, charge or tax",
                              "elementIdentifier": "TXI08"
                            },
                            "TXI09": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "TXI09 - Tax Identification Number",
                              "description": "Number assigned to a purchaser (buyer, orderer) by a taxing jurisdiction (state, county, etc.); often called a tax exemption number or certificate number",
                              "elementIdentifier": "TXI09"
                            },
                            "TXI10": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "TXI10 - Assigned Identification",
                              "description": "Alphanumeric characters assigned for differentiation within a transaction set",
                              "elementIdentifier": "TXI10"
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "N1_loop": {
                  "schemaType": "loopArray",
                  "type": "array",
                  "loopContents": "N1-N2-N3-N4-REF-PER-DMG",
                  "minItems": 1,
                  "items": {
                    "schemaType": "loop",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "N1": {
                        "schemaType": "segmentArray",
                        "type": "array",
                        "items": {
                          "schemaType": "segment",
                          "title": "N1 - Name",
                          "description": "To identify a party by type of organization, name, and code",
                          "segmentIdentifier": "N1",
                          "type": "object",
                          "minProperties": 1,
                          "additionalProperties": false,
                          "properties": {
                            "N101": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "N101 - Entity Identifier Code",
                              "description": "Code identifying an organizational entity, a physical location, property or an individual",
                              "elementIdentifier": "N101"
                            },
                            "N102": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "N102 - Name",
                              "description": "Free-form name",
                              "elementIdentifier": "N102"
                            },
                            "N103": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "N103 - Identification Code Qualifier",
                              "description": "Code designating the system/method of code structure used for Identification Code (67)",
                              "elementIdentifier": "N103"
                            },
                            "N104": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "N104 - Identification Code",
                              "description": "Code identifying a party or other code",
                              "elementIdentifier": "N104"
                            },
                            "N105": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "N105 - Entity Relationship Code",
                              "description": "Code describing entity relationship",
                              "elementIdentifier": "N105"
                            },
                            "N106": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "N106 - Entity Identifier Code",
                              "description": "Code identifying an organizational entity, a physical location, property or an individual",
                              "elementIdentifier": "N106"
                            }
                          }
                        }
                      },
                      "N2": {
                        "schemaType": "segmentArray",
                        "type": "array",
                        "items": {
                          "schemaType": "segment",
                          "title": "N2 - Additional Name Information",
                          "description": "To specify additional names or those longer than 35 characters in length",
                          "segmentIdentifier": "N2",
                          "type": "object",
                          "minProperties": 1,
                          "additionalProperties": false,
                          "properties": {
                            "N201": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "N201 - Name",
                              "description": "Free-form name",
                              "elementIdentifier": "N201"
                            },
                            "N202": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "N202 - Name",
                              "description": "Free-form name",
                              "elementIdentifier": "N202"
                            }
                          }
                        }
                      },
                      "N3": {
                        "schemaType": "segmentArray",
                        "type": "array",
                        "items": {
                          "schemaType": "segment",
                          "title": "N3 - Address Information",
                          "description": "To specify the location of the named party",
                          "segmentIdentifier": "N3",
                          "type": "object",
                          "minProperties": 1,
                          "additionalProperties": false,
                          "properties": {
                            "N301": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "N301 - Address Information",
                              "description": "Address information",
                              "elementIdentifier": "N301"
                            },
                            "N302": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "N302 - Address Information",
                              "description": "Address information",
                              "elementIdentifier": "N302"
                            }
                          }
                        }
                      },
                      "N4": {
                        "schemaType": "segmentArray",
                        "type": "array",
                        "items": {
                          "schemaType": "segment",
                          "title": "N4 - Geographic Location",
                          "description": "To specify the geographic place of the named party",
                          "segmentIdentifier": "N4",
                          "type": "object",
                          "minProperties": 1,
                          "additionalProperties": false,
                          "properties": {
                            "N401": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "N401 - City Name",
                              "description": "Free-form text for city name",
                              "elementIdentifier": "N401"
                            },
                            "N402": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "N402 - State or Province Code",
                              "description": "Code (Standard State/Province) as defined by appropriate government agency",
                              "elementIdentifier": "N402"
                            },
                            "N403": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "N403 - Postal Code",
                              "description": "Code defining international postal zone code excluding punctuation and blanks (zip code for United States)",
                              "elementIdentifier": "N403"
                            },
                            "N404": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "N404 - Country Code",
                              "description": "Code identifying the country",
                              "elementIdentifier": "N404"
                            },
                            "N405": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "N405 - Location Qualifier",
                              "description": "Code identifying type of location",
                              "elementIdentifier": "N405"
                            },
                            "N406": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "N406 - Location Identifier",
                              "description": "Code which identifies a specific location",
                              "elementIdentifier": "N406"
                            }
                          }
                        }
                      },
                      "REF": {
                        "schemaType": "segmentArray",
                        "type": "array",
                        "items": {
                          "schemaType": "segment",
                          "title": "REF - Reference Identification",
                          "description": "To specify identifying information",
                          "segmentIdentifier": "REF",
                          "type": "object",
                          "minProperties": 1,
                          "additionalProperties": false,
                          "properties": {
                            "REF01": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "REF01 - Reference Identification Qualifier",
                              "description": "Code qualifying the Reference Identification",
                              "elementIdentifier": "REF01"
                            },
                            "REF02": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "REF02 - Reference Identification",
                              "description": "Reference information as defined for a particular Transaction Set or as specified by the Reference Identification Qualifier",
                              "elementIdentifier": "REF02"
                            },
                            "REF03": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "REF03 - Description",
                              "description": "A free-form description to clarify the related data elements and their content",
                              "elementIdentifier": "REF03"
                            },
                            "REF0401": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "REF0401 - Reference Identification Qualifier",
                              "description": "Code qualifying the Reference Identification",
                              "elementIdentifier": "REF0401"
                            },
                            "REF0402": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "REF0402 - Reference Identification",
                              "description": "Reference information as defined for a particular Transaction Set or as specified by the Reference Identification Qualifier",
                              "elementIdentifier": "REF0402"
                            },
                            "REF0403": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "REF0403 - Reference Identification Qualifier",
                              "description": "Code qualifying the Reference Identification",
                              "elementIdentifier": "REF0403"
                            },
                            "REF0404": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "REF0404 - Reference Identification",
                              "description": "Reference information as defined for a particular Transaction Set or as specified by the Reference Identification Qualifier",
                              "elementIdentifier": "REF0404"
                            },
                            "REF0405": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "REF0405 - Reference Identification Qualifier",
                              "description": "Code qualifying the Reference Identification",
                              "elementIdentifier": "REF0405"
                            },
                            "REF0406": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "REF0406 - Reference Identification",
                              "description": "Reference information as defined for a particular Transaction Set or as specified by the Reference Identification Qualifier",
                              "elementIdentifier": "REF0406"
                            }
                          }
                        }
                      },
                      "PER": {
                        "schemaType": "segmentArray",
                        "type": "array",
                        "items": {
                          "schemaType": "segment",
                          "title": "PER - Administrative Communications Contact",
                          "description": "To identify a person or office to whom administrative communications should be directed",
                          "segmentIdentifier": "PER",
                          "type": "object",
                          "minProperties": 1,
                          "additionalProperties": false,
                          "properties": {
                            "PER01": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "PER01 - Contact Function Code",
                              "description": "Code identifying the major duty or responsibility of the person or group named",
                              "elementIdentifier": "PER01"
                            },
                            "PER02": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "PER02 - Name",
                              "description": "Free-form name",
                              "elementIdentifier": "PER02"
                            },
                            "PER03": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "PER03 - Communication Number Qualifier",
                              "description": "Code identifying the type of communication number",
                              "elementIdentifier": "PER03"
                            },
                            "PER04": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "PER04 - Communication Number",
                              "description": "Complete communications number including country or area code when applicable",
                              "elementIdentifier": "PER04"
                            },
                            "PER05": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "PER05 - Communication Number Qualifier",
                              "description": "Code identifying the type of communication number",
                              "elementIdentifier": "PER05"
                            },
                            "PER06": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "PER06 - Communication Number",
                              "description": "Complete communications number including country or area code when applicable",
                              "elementIdentifier": "PER06"
                            },
                            "PER07": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "PER07 - Communication Number Qualifier",
                              "description": "Code identifying the type of communication number",
                              "elementIdentifier": "PER07"
                            },
                            "PER08": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "PER08 - Communication Number",
                              "description": "Complete communications number including country or area code when applicable",
                              "elementIdentifier": "PER08"
                            },
                            "PER09": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "PER09 - Contact Inquiry Reference",
                              "description": "Additional reference number or description to clarify a contact number",
                              "elementIdentifier": "PER09"
                            }
                          }
                        }
                      },
                      "DMG": {
                        "schemaType": "segmentArray",
                        "type": "array",
                        "items": {
                          "schemaType": "segment",
                          "title": "DMG - Demographic Information",
                          "description": "To supply demographic information",
                          "segmentIdentifier": "DMG",
                          "type": "object",
                          "minProperties": 1,
                          "additionalProperties": false,
                          "properties": {
                            "DMG01": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "DMG01 - Date Time Period Format Qualifier",
                              "description": "Code indicating the date format, time format, or date and time format",
                              "elementIdentifier": "DMG01"
                            },
                            "DMG02": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "DMG02 - Date Time Period",
                              "description": "Expression of a date, a time, or range of dates, times or dates and times",
                              "elementIdentifier": "DMG02"
                            },
                            "DMG03": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "DMG03 - Gender Code",
                              "description": "Code indicating the sex of the individual",
                              "elementIdentifier": "DMG03"
                            },
                            "DMG04": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "DMG04 - Marital Status Code",
                              "description": "Code defining the marital status of a person",
                              "elementIdentifier": "DMG04"
                            },
                            "DMG05": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "DMG05 - Race or Ethnicity Code",
                              "description": "Code indicating the racial or ethnic background of a person; it is normally self-reported; Under certain circumstances this information is collected for United States Government statistical purposes",
                              "elementIdentifier": "DMG05"
                            },
                            "DMG06": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "DMG06 - Citizenship Status Code",
                              "description": "Code indicating citizenship status",
                              "elementIdentifier": "DMG06"
                            },
                            "DMG07": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "DMG07 - Country Code",
                              "description": "Code identifying the country",
                              "elementIdentifier": "DMG07"
                            },
                            "DMG08": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "DMG08 - Basis of Verification Code",
                              "description": "Code indicating the basis of verification",
                              "elementIdentifier": "DMG08"
                            },
                            "DMG09": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "DMG09 - Quantity",
                              "description": "Numeric value of quantity",
                              "elementIdentifier": "DMG09"
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "LM_loop": {
                  "schemaType": "loopArray",
                  "type": "array",
                  "loopContents": "LM-LQ",
                  "minItems": 1,
                  "items": {
                    "schemaType": "loop",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "LM": {
                        "schemaType": "segmentArray",
                        "type": "array",
                        "items": {
                          "schemaType": "segment",
                          "title": "LM - Code Source Information",
                          "description": "To transmit standard code list identification information",
                          "segmentIdentifier": "LM",
                          "type": "object",
                          "minProperties": 1,
                          "additionalProperties": false,
                          "properties": {
                            "LM01": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "LM01 - Agency Qualifier Code",
                              "description": "Code identifying the agency assigning the code values",
                              "elementIdentifier": "LM01"
                            },
                            "LM02": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "LM02 - Source Subqualifier",
                              "description": "A reference that indicates the table or text maintained by the Source Qualifier",
                              "elementIdentifier": "LM02"
                            }
                          }
                        }
                      },
                      "LQ": {
                        "schemaType": "segmentArray",
                        "type": "array",
                        "items": {
                          "schemaType": "segment",
                          "title": "LQ - Industry Code",
                          "description": "Code to transmit standard industry codes",
                          "segmentIdentifier": "LQ",
                          "type": "object",
                          "minProperties": 1,
                          "additionalProperties": false,
                          "properties": {
                            "LQ01": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "LQ01 - Code List Qualifier Code",
                              "description": "Code identifying a specific industry code list",
                              "elementIdentifier": "LQ01"
                            },
                            "LQ02": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "LQ02 - Industry Code",
                              "description": "Code indicating a code from a specific industry code list",
                              "elementIdentifier": "LQ02"
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "V1_loop": {
                  "schemaType": "loopArray",
                  "type": "array",
                  "loopContents": "V1-R4-DTM",
                  "minItems": 1,
                  "items": {
                    "schemaType": "loop",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "V1": {
                        "schemaType": "segmentArray",
                        "type": "array",
                        "items": {
                          "schemaType": "segment",
                          "title": "V1 - Vessel Identification",
                          "description": "To provide vessel details and voyage number",
                          "segmentIdentifier": "V1",
                          "type": "object",
                          "minProperties": 1,
                          "additionalProperties": false,
                          "properties": {
                            "V101": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "V101 - Vessel Code",
                              "description": "Code identifying vessel",
                              "elementIdentifier": "V101"
                            },
                            "V102": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "V102 - Vessel Name",
                              "description": "Name of ship as documented in \"Lloyd's Register of Ships\"",
                              "elementIdentifier": "V102"
                            },
                            "V103": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "V103 - Country Code",
                              "description": "Code identifying the country",
                              "elementIdentifier": "V103"
                            },
                            "V104": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "V104 - Flight/Voyage Number",
                              "description": "Identifying designator for the particular flight or voyage on which the cargo travels",
                              "elementIdentifier": "V104"
                            },
                            "V105": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "V105 - Standard Carrier Alpha Code",
                              "description": "Standard Carrier Alpha Code",
                              "elementIdentifier": "V105"
                            },
                            "V106": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "V106 - Vessel Requirement Code",
                              "description": "Code specifying options for satisfying vessel requirements",
                              "elementIdentifier": "V106"
                            },
                            "V107": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "V107 - Vessel Type Code",
                              "description": "Code to determine type of vessel",
                              "elementIdentifier": "V107"
                            },
                            "V108": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "V108 - Vessel Code Qualifier",
                              "description": "Code specifying vessel code source",
                              "elementIdentifier": "V108"
                            },
                            "V109": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "V109 - Transportation Method/Type Code",
                              "description": "Code specifying the method or type of transportation for the shipment",
                              "elementIdentifier": "V109"
                            }
                          }
                        }
                      },
                      "R4": {
                        "schemaType": "segmentArray",
                        "type": "array",
                        "items": {
                          "schemaType": "segment",
                          "title": "R4 - Port or Terminal",
                          "description": "Contractual or operational port or point relevant to the movement of the cargo",
                          "segmentIdentifier": "R4",
                          "type": "object",
                          "minProperties": 1,
                          "additionalProperties": false,
                          "properties": {
                            "R401": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "R401 - Port or Terminal Function Code",
                              "description": "Code defining function performed at the port or terminal with respect to a shipment",
                              "elementIdentifier": "R401"
                            },
                            "R402": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "R402 - Location Qualifier",
                              "description": "Code identifying type of location",
                              "elementIdentifier": "R402"
                            },
                            "R403": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "R403 - Location Identifier",
                              "description": "Code which identifies a specific location",
                              "elementIdentifier": "R403"
                            },
                            "R404": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "R404 - Port Name",
                              "description": "Free-form name for the place at which an offshore carrier originates or terminates (by transshipment or otherwise) its actual ocean carriage of property",
                              "elementIdentifier": "R404"
                            },
                            "R405": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "R405 - Country Code",
                              "description": "Code identifying the country",
                              "elementIdentifier": "R405"
                            },
                            "R406": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "R406 - Terminal Name",
                              "description": "Free-form field for terminal name",
                              "elementIdentifier": "R406"
                            },
                            "R407": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "R407 - Pier Number",
                              "description": "Identifying number for the pier",
                              "elementIdentifier": "R407"
                            },
                            "R408": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "R408 - State or Province Code",
                              "description": "Code (Standard State/Province) as defined by appropriate government agency",
                              "elementIdentifier": "R408"
                            }
                          }
                        }
                      },
                      "DTM": {
                        "schemaType": "segmentArray",
                        "type": "array",
                        "items": {
                          "schemaType": "segment",
                          "title": "DTM - Date/Time Reference",
                          "description": "To specify pertinent dates and times",
                          "segmentIdentifier": "DTM",
                          "type": "object",
                          "minProperties": 1,
                          "additionalProperties": false,
                          "properties": {
                            "DTM01": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "DTM01 - Date/Time Qualifier",
                              "description": "Code specifying type of date or time, or both date and time",
                              "elementIdentifier": "DTM01"
                            },
                            "DTM02": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "DTM02 - Date",
                              "description": "Date expressed as CCYYMMDD",
                              "elementIdentifier": "DTM02"
                            },
                            "DTM03": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "DTM03 - Time",
                              "description": "Time expressed in 24-hour clock time as follows: HHMM, or HHMMSS, or HHMMSSD, or HHMMSSDD, where H = hours (00-23), M = minutes (00-59), S = integer seconds (00-59) and DD = decimal seconds; decimal seconds are expressed as follows: D = tenths (0-9) and DD = hundredths (00-99)",
                              "elementIdentifier": "DTM03"
                            },
                            "DTM04": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "DTM04 - Time Code",
                              "description": "Code identifying the time. In accordance with International Standards Organization standard 8601, time can be specified by a + or - and an indication in hours in relation to Universal Time Coordinate (UTC) time; since + is a restricted character, + and - are substituted by P and M in the codes that follow",
                              "elementIdentifier": "DTM04"
                            },
                            "DTM05": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "DTM05 - Date Time Period Format Qualifier",
                              "description": "Code indicating the date format, time format, or date and time format",
                              "elementIdentifier": "DTM05"
                            },
                            "DTM06": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "DTM06 - Date Time Period",
                              "description": "Expression of a date, a time, or range of dates, times or dates and times",
                              "elementIdentifier": "DTM06"
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "FA1_loop": {
                  "schemaType": "loopArray",
                  "type": "array",
                  "loopContents": "FA1-FA2",
                  "minItems": 1,
                  "items": {
                    "schemaType": "loop",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "FA1": {
                        "schemaType": "segmentArray",
                        "type": "array",
                        "items": {
                          "schemaType": "segment",
                          "title": "FA1 - Type of Financial Accounting Data",
                          "description": "To specify the organization controlling the content of the accounting citation, and the purpose associated with the accounting citation",
                          "segmentIdentifier": "FA1",
                          "type": "object",
                          "minProperties": 1,
                          "additionalProperties": false,
                          "properties": {
                            "FA101": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "FA101 - Agency Qualifier Code",
                              "description": "Code identifying the agency assigning the code values",
                              "elementIdentifier": "FA101"
                            },
                            "FA102": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "FA102 - Service, Promotion, Allowance, or Charge Code",
                              "description": "Code identifying the service, promotion, allowance, or charge",
                              "elementIdentifier": "FA102"
                            },
                            "FA103": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "FA103 - Allowance or Charge Indicator",
                              "description": "Code which indicates an allowance or charge for the service specified",
                              "elementIdentifier": "FA103"
                            }
                          }
                        }
                      },
                      "FA2": {
                        "schemaType": "segmentArray",
                        "type": "array",
                        "items": {
                          "schemaType": "segment",
                          "title": "FA2 - Accounting Data",
                          "description": "To specify the detailed accounting data",
                          "segmentIdentifier": "FA2",
                          "type": "object",
                          "minProperties": 1,
                          "additionalProperties": false,
                          "properties": {
                            "FA201": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "FA201 - Breakdown Structure Detail Code",
                              "description": "Codes identifying details relating to a reporting breakdown structure tree",
                              "elementIdentifier": "FA201"
                            },
                            "FA202": {
                              "schemaType": "element",
                              "type": "string",
                              "title": "FA202 - Financial Information Code",
                              "description": "Code representing financial accounting information",
                              "elementIdentifier": "FA202"
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "TDS": {
            "schemaType": "segmentArray",
            "type": "array",
            "items": {
              "schemaType": "segment",
              "title": "TDS - Total Monetary Value Summary",
              "description": "To specify the total invoice discounts and amounts",
              "segmentIdentifier": "TDS",
              "type": "object",
              "minProperties": 1,
              "additionalProperties": false,
              "properties": {
                "TDS01": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "TDS01 - Amount",
                  "description": "Monetary amount",
                  "elementIdentifier": "TDS01"
                },
                "TDS02": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "TDS02 - Amount",
                  "description": "Monetary amount",
                  "elementIdentifier": "TDS02"
                },
                "TDS03": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "TDS03 - Amount",
                  "description": "Monetary amount",
                  "elementIdentifier": "TDS03"
                },
                "TDS04": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "TDS04 - Amount",
                  "description": "Monetary amount",
                  "elementIdentifier": "TDS04"
                }
              }
            }
          },
          "TXI": {
            "schemaType": "segmentArray",
            "type": "array",
            "items": {
              "schemaType": "segment",
              "title": "TXI - Tax Information",
              "description": "To specify tax information",
              "segmentIdentifier": "TXI",
              "type": "object",
              "minProperties": 1,
              "additionalProperties": false,
              "properties": {
                "TXI01": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "TXI01 - Tax Type Code",
                  "description": "Code specifying the type of tax",
                  "elementIdentifier": "TXI01"
                },
                "TXI02": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "TXI02 - Monetary Amount",
                  "description": "Monetary amount",
                  "elementIdentifier": "TXI02"
                },
                "TXI03": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "TXI03 - Percent",
                  "description": "Percentage expressed as a decimal",
                  "elementIdentifier": "TXI03"
                },
                "TXI04": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "TXI04 - Tax Jurisdiction Code Qualifier",
                  "description": "Code identifying the source of the data used in tax jurisdiction code",
                  "elementIdentifier": "TXI04"
                },
                "TXI05": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "TXI05 - Tax Jurisdiction Code",
                  "description": "Code identifying the taxing jurisdiction",
                  "elementIdentifier": "TXI05"
                },
                "TXI06": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "TXI06 - Tax Exempt Code",
                  "description": "Code identifying exemption status from sales and use tax",
                  "elementIdentifier": "TXI06"
                },
                "TXI07": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "TXI07 - Relationship Code",
                  "description": "Code indicating the relationship between entities",
                  "elementIdentifier": "TXI07"
                },
                "TXI08": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "TXI08 - Dollar Basis For Percent",
                  "description": "Dollar basis to be used in the percent calculation of the allowance, charge or tax",
                  "elementIdentifier": "TXI08"
                },
                "TXI09": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "TXI09 - Tax Identification Number",
                  "description": "Number assigned to a purchaser (buyer, orderer) by a taxing jurisdiction (state, county, etc.); often called a tax exemption number or certificate number",
                  "elementIdentifier": "TXI09"
                },
                "TXI10": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "TXI10 - Assigned Identification",
                  "description": "Alphanumeric characters assigned for differentiation within a transaction set",
                  "elementIdentifier": "TXI10"
                }
              }
            }
          },
          "CAD": {
            "schemaType": "segmentArray",
            "type": "array",
            "items": {
              "schemaType": "segment",
              "title": "CAD - Carrier Detail",
              "description": "To specify transportation details for the transaction",
              "segmentIdentifier": "CAD",
              "type": "object",
              "minProperties": 1,
              "additionalProperties": false,
              "properties": {
                "CAD01": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "CAD01 - Transportation Method/Type Code",
                  "description": "Code specifying the method or type of transportation for the shipment",
                  "elementIdentifier": "CAD01"
                },
                "CAD02": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "CAD02 - Equipment Initial",
                  "description": "Prefix or alphabetic part of an equipment unit's identifying number",
                  "elementIdentifier": "CAD02"
                },
                "CAD03": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "CAD03 - Equipment Number",
                  "description": "Sequencing or serial part of an equipment unit's identifying number (pure numeric form for equipment number is preferred)",
                  "elementIdentifier": "CAD03"
                },
                "CAD04": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "CAD04 - Standard Carrier Alpha Code",
                  "description": "Standard Carrier Alpha Code",
                  "elementIdentifier": "CAD04"
                },
                "CAD05": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "CAD05 - Routing",
                  "description": "Free-form description of the routing or requested routing for shipment, or the originating carrier's identity",
                  "elementIdentifier": "CAD05"
                },
                "CAD06": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "CAD06 - Shipment/Order Status Code",
                  "description": "Code indicating the status of an order or shipment or the disposition of any difference between the quantity ordered and the quantity shipped for a line item or transaction",
                  "elementIdentifier": "CAD06"
                },
                "CAD07": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "CAD07 - Reference Identification Qualifier",
                  "description": "Code qualifying the Reference Identification",
                  "elementIdentifier": "CAD07"
                },
                "CAD08": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "CAD08 - Reference Identification",
                  "description": "Reference information as defined for a particular Transaction Set or as specified by the Reference Identification Qualifier",
                  "elementIdentifier": "CAD08"
                },
                "CAD09": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "CAD09 - Service Level Code",
                  "description": "Code indicating the level of transportation service or the billing service offered by the transportation carrier",
                  "elementIdentifier": "CAD09"
                }
              }
            }
          },
          "AMT": {
            "schemaType": "segmentArray",
            "type": "array",
            "items": {
              "schemaType": "segment",
              "title": "AMT - Monetary Amount",
              "description": "To indicate the total monetary amount",
              "segmentIdentifier": "AMT",
              "type": "object",
              "minProperties": 1,
              "additionalProperties": false,
              "properties": {
                "AMT01": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "AMT01 - Amount Qualifier Code",
                  "description": "Code to qualify amount",
                  "elementIdentifier": "AMT01"
                },
                "AMT02": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "AMT02 - Monetary Amount",
                  "description": "Monetary amount",
                  "elementIdentifier": "AMT02"
                },
                "AMT03": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "AMT03 - Credit/Debit Flag Code",
                  "description": "Code indicating whether amount is a credit or debit",
                  "elementIdentifier": "AMT03"
                }
              }
            }
          },
          "SAC_loop": {
            "schemaType": "loopArray",
            "type": "array",
            "loopContents": "SAC-TXI",
            "minItems": 1,
            "items": {
              "schemaType": "loop",
              "type": "object",
              "minProperties": 1,
              "additionalProperties": false,
              "properties": {
                "SAC": {
                  "schemaType": "segmentArray",
                  "type": "array",
                  "items": {
                    "schemaType": "segment",
                    "title": "SAC - Service, Promotion, Allowance, or Charge Information",
                    "description": "To request or identify a service, promotion, allowance, or charge; to specify the amount or percentage for the service, promotion, allowance, or charge",
                    "segmentIdentifier": "SAC",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "SAC01": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SAC01 - Allowance or Charge Indicator",
                        "description": "Code which indicates an allowance or charge for the service specified",
                        "elementIdentifier": "SAC01"
                      },
                      "SAC02": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SAC02 - Service, Promotion, Allowance, or Charge Code",
                        "description": "Code identifying the service, promotion, allowance, or charge",
                        "elementIdentifier": "SAC02"
                      },
                      "SAC03": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SAC03 - Agency Qualifier Code",
                        "description": "Code identifying the agency assigning the code values",
                        "elementIdentifier": "SAC03"
                      },
                      "SAC04": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SAC04 - Agency Service, Promotion, Allowance, or Charge Code",
                        "description": "Agency maintained code identifying the service, promotion, allowance, or charge",
                        "elementIdentifier": "SAC04"
                      },
                      "SAC05": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SAC05 - Amount",
                        "description": "Monetary amount",
                        "elementIdentifier": "SAC05"
                      },
                      "SAC06": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SAC06 - Allowance/Charge Percent Qualifier",
                        "description": "Code indicating on what basis allowance or charge percent is calculated",
                        "elementIdentifier": "SAC06"
                      },
                      "SAC07": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SAC07 - Percent",
                        "description": "Percent expressed as a percent",
                        "elementIdentifier": "SAC07"
                      },
                      "SAC08": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SAC08 - Rate",
                        "description": "Rate expressed in the standard monetary denomination for the currency specified",
                        "elementIdentifier": "SAC08"
                      },
                      "SAC09": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SAC09 - Unit or Basis for Measurement Code",
                        "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                        "elementIdentifier": "SAC09"
                      },
                      "SAC10": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SAC10 - Quantity",
                        "description": "Numeric value of quantity",
                        "elementIdentifier": "SAC10"
                      },
                      "SAC11": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SAC11 - Quantity",
                        "description": "Numeric value of quantity",
                        "elementIdentifier": "SAC11"
                      },
                      "SAC12": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SAC12 - Allowance or Charge Method of Handling Code",
                        "description": "Code indicating method of handling for an allowance or charge",
                        "elementIdentifier": "SAC12"
                      },
                      "SAC13": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SAC13 - Reference Identification",
                        "description": "Reference information as defined for a particular Transaction Set or as specified by the Reference Identification Qualifier",
                        "elementIdentifier": "SAC13"
                      },
                      "SAC14": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SAC14 - Option Number",
                        "description": "A unique number identifying available promotion or allowance options when more than one is offered",
                        "elementIdentifier": "SAC14"
                      },
                      "SAC15": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SAC15 - Description",
                        "description": "A free-form description to clarify the related data elements and their content",
                        "elementIdentifier": "SAC15"
                      },
                      "SAC16": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "SAC16 - Language Code",
                        "description": "Code designating the language used in text, from a standard code list maintained by the International Standards Organization (ISO 639)",
                        "elementIdentifier": "SAC16"
                      }
                    }
                  }
                },
                "TXI": {
                  "schemaType": "segmentArray",
                  "type": "array",
                  "items": {
                    "schemaType": "segment",
                    "title": "TXI - Tax Information",
                    "description": "To specify tax information",
                    "segmentIdentifier": "TXI",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "TXI01": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "TXI01 - Tax Type Code",
                        "description": "Code specifying the type of tax",
                        "elementIdentifier": "TXI01"
                      },
                      "TXI02": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "TXI02 - Monetary Amount",
                        "description": "Monetary amount",
                        "elementIdentifier": "TXI02"
                      },
                      "TXI03": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "TXI03 - Percent",
                        "description": "Percentage expressed as a decimal",
                        "elementIdentifier": "TXI03"
                      },
                      "TXI04": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "TXI04 - Tax Jurisdiction Code Qualifier",
                        "description": "Code identifying the source of the data used in tax jurisdiction code",
                        "elementIdentifier": "TXI04"
                      },
                      "TXI05": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "TXI05 - Tax Jurisdiction Code",
                        "description": "Code identifying the taxing jurisdiction",
                        "elementIdentifier": "TXI05"
                      },
                      "TXI06": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "TXI06 - Tax Exempt Code",
                        "description": "Code identifying exemption status from sales and use tax",
                        "elementIdentifier": "TXI06"
                      },
                      "TXI07": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "TXI07 - Relationship Code",
                        "description": "Code indicating the relationship between entities",
                        "elementIdentifier": "TXI07"
                      },
                      "TXI08": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "TXI08 - Dollar Basis For Percent",
                        "description": "Dollar basis to be used in the percent calculation of the allowance, charge or tax",
                        "elementIdentifier": "TXI08"
                      },
                      "TXI09": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "TXI09 - Tax Identification Number",
                        "description": "Number assigned to a purchaser (buyer, orderer) by a taxing jurisdiction (state, county, etc.); often called a tax exemption number or certificate number",
                        "elementIdentifier": "TXI09"
                      },
                      "TXI10": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "TXI10 - Assigned Identification",
                        "description": "Alphanumeric characters assigned for differentiation within a transaction set",
                        "elementIdentifier": "TXI10"
                      }
                    }
                  }
                }
              }
            }
          },
          "ISS_loop": {
            "schemaType": "loopArray",
            "type": "array",
            "loopContents": "ISS-PID",
            "minItems": 1,
            "items": {
              "schemaType": "loop",
              "type": "object",
              "minProperties": 1,
              "additionalProperties": false,
              "properties": {
                "ISS": {
                  "schemaType": "segmentArray",
                  "type": "array",
                  "items": {
                    "schemaType": "segment",
                    "title": "ISS - Invoice Shipment Summary",
                    "description": "To specify summary details of total items shipped in terms of quantity, weight, and volume",
                    "segmentIdentifier": "ISS",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "ISS01": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "ISS01 - Number of Units Shipped",
                        "description": "Numeric value of units shipped in manufacturer's shipping units for a line item or transaction set",
                        "elementIdentifier": "ISS01"
                      },
                      "ISS02": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "ISS02 - Unit or Basis for Measurement Code",
                        "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                        "elementIdentifier": "ISS02"
                      },
                      "ISS03": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "ISS03 - Weight",
                        "description": "Numeric value of weight",
                        "elementIdentifier": "ISS03"
                      },
                      "ISS04": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "ISS04 - Unit or Basis for Measurement Code",
                        "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                        "elementIdentifier": "ISS04"
                      },
                      "ISS05": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "ISS05 - Volume",
                        "description": "Value of volumetric measure",
                        "elementIdentifier": "ISS05"
                      },
                      "ISS06": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "ISS06 - Unit or Basis for Measurement Code",
                        "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                        "elementIdentifier": "ISS06"
                      },
                      "ISS07": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "ISS07 - Quantity",
                        "description": "Numeric value of quantity",
                        "elementIdentifier": "ISS07"
                      },
                      "ISS08": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "ISS08 - Weight",
                        "description": "Numeric value of weight",
                        "elementIdentifier": "ISS08"
                      }
                    }
                  }
                },
                "PID": {
                  "schemaType": "segmentArray",
                  "type": "array",
                  "items": {
                    "schemaType": "segment",
                    "title": "PID - Product/Item Description",
                    "description": "To describe a product or process in coded or free-form format",
                    "segmentIdentifier": "PID",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "properties": {
                      "PID01": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PID01 - Item Description Type",
                        "description": "Code indicating the format of a description",
                        "elementIdentifier": "PID01"
                      },
                      "PID02": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PID02 - Product/Process Characteristic Code",
                        "description": "Code identifying the general class of a product or process characteristic",
                        "elementIdentifier": "PID02"
                      },
                      "PID03": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PID03 - Agency Qualifier Code",
                        "description": "Code identifying the agency assigning the code values",
                        "elementIdentifier": "PID03"
                      },
                      "PID04": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PID04 - Product Description Code",
                        "description": "A code from an industry code list which provides specific data about a product characteristic",
                        "elementIdentifier": "PID04"
                      },
                      "PID05": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PID05 - Description",
                        "description": "A free-form description to clarify the related data elements and their content",
                        "elementIdentifier": "PID05"
                      },
                      "PID06": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PID06 - Surface/Layer/Position Code",
                        "description": "Code indicating the product surface, layer or position that is being described",
                        "elementIdentifier": "PID06"
                      },
                      "PID07": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PID07 - Source Subqualifier",
                        "description": "A reference that indicates the table or text maintained by the Source Qualifier",
                        "elementIdentifier": "PID07"
                      },
                      "PID08": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PID08 - Yes/No Condition or Response Code",
                        "description": "Code indicating a Yes or No condition or response",
                        "elementIdentifier": "PID08"
                      },
                      "PID09": {
                        "schemaType": "element",
                        "type": "string",
                        "title": "PID09 - Language Code",
                        "description": "Code designating the language used in text, from a standard code list maintained by the International Standards Organization (ISO 639)",
                        "elementIdentifier": "PID09"
                      }
                    }
                  }
                }
              }
            }
          },
          "CTT": {
            "schemaType": "segmentArray",
            "type": "array",
            "items": {
              "schemaType": "segment",
              "title": "CTT - Transaction Totals",
              "description": "To transmit a hash total for a specific element in the transaction set",
              "segmentIdentifier": "CTT",
              "type": "object",
              "minProperties": 1,
              "additionalProperties": false,
              "properties": {
                "CTT01": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "CTT01 - Number of Line Items",
                  "description": "Total number of line items in the transaction set",
                  "elementIdentifier": "CTT01"
                },
                "CTT02": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "CTT02 - Hash Total",
                  "description": "Sum of values of the specified data element. All values in the data element will be summed without regard to decimal points (explicit or implicit) or signs. Truncation will occur on the left most digits if the sum is greater than the maximum size of the hash total of the data element.Example:-.0018 First occurrence of value beinghashed..18 Second occurrence of value beinghashed.1.8 Third occurrence of value beinghashed.18.01 Fourth occurrence of value beinghashed.---------1855 Hash total prior to truncation.855 Hash total after truncation tothree-digit field.",
                  "elementIdentifier": "CTT02"
                },
                "CTT03": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "CTT03 - Weight",
                  "description": "Numeric value of weight",
                  "elementIdentifier": "CTT03"
                },
                "CTT04": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "CTT04 - Unit or Basis for Measurement Code",
                  "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                  "elementIdentifier": "CTT04"
                },
                "CTT05": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "CTT05 - Volume",
                  "description": "Value of volumetric measure",
                  "elementIdentifier": "CTT05"
                },
                "CTT06": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "CTT06 - Unit or Basis for Measurement Code",
                  "description": "Code specifying the units in which a value is being expressed, or manner in which a measurement has been taken",
                  "elementIdentifier": "CTT06"
                },
                "CTT07": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "CTT07 - Description",
                  "description": "A free-form description to clarify the related data elements and their content",
                  "elementIdentifier": "CTT07"
                }
              }
            }
          },
          "SE": {
            "schemaType": "segmentArray",
            "type": "array",
            "items": {
              "schemaType": "segment",
              "title": "SE - Transaction Set Trailer",
              "description": "To indicate the end of the transaction set and provide the count of the transmitted segments (including the beginning (ST) and ending (SE) segments)",
              "segmentIdentifier": "SE",
              "type": "object",
              "minProperties": 1,
              "additionalProperties": false,
              "properties": {
                "SE01": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "SE01 - Number of Included Segments",
                  "description": "Total number of segments included in a transaction set including ST and SE segments",
                  "elementIdentifier": "SE01"
                },
                "SE02": {
                  "schemaType": "element",
                  "type": "string",
                  "title": "SE02 - Transaction Set Control Number",
                  "description": "Identifying control number that must be unique within the transaction set functional group assigned by the originator for a transaction set",
                  "elementIdentifier": "SE02"
                }
              }
            }
          }
        }
      }
    }
  }
}

export default schema;
