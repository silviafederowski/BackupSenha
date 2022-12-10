import React, { Component } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Row, Table, TableWrapper } from "react-native-table-component";
import { LogBox } from "react-native";
import css from "../Css/css";
import { GeraSenha } from "./GeraSenha";

LogBox.ignoreAllLogs();//Ignore all log notifications

export default class TableMaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Head', 'Head2', 'Head3', 'Head4', 'Head5', 'Head6', 'Head7', 'Head8', 'Head9'],
      widthArr: [40, 60, 80, 100, 120, 140, 160, 180, 200]
      
    }
    let headerText = props.headerText
    console.log(props)
    console.log("***** " + props.headerText)
    // console.log( "***===&=== " + props.headerText)

    const titulos= headerText.map((texto)=> 
     "kkk");
  }

  render() {
    const state = this.state;
    const tableData = [];
    for (let i = 0; i < 30; i += 1) {
      const rowData = [];
      for (let j = 0; j < 9; j += 1) {
        rowData.push(`${i}${j}`);
      }
      tableData.push(rowData);
    }

    return (
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              <Row data={state.tableHead} widthArr={state.widthArr}
               style={styles.header} 
              textStyle={styles.text}
              />
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                {
                  tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                      textStyle={styles.text}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: 'bold' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' }
});
 
//================================================================ 
//   state = {
//     value: null,
//   };
//   render() {
//     console.log("=========>Table");
//     const state = this.state;
//     const qtdcols = this.props.qtdcols
//     const headerText = this.props.headerText
//     const columnsWidth = this.props.columnsWidth
//     const rows = this.props.rows
//     const tableData = [];
    
    
//     console.log("===> qtdcols= " + qtdcols)
//     console.log("===> headerText= " + headerText)
//     console.log("===> columnsWidth= " + columnsWidth)
//     console.log("===> rows= " + rows)

//     const rowData = [];
//     for (let i = 0; i < rows; i += 1) {
//       for (let j = 0; j < qtdcols; j += 1) {
//         rowData.push(`${i}${j}`);
//       }
//       tableData.push(rowData);
//     }
//     // console.log("===> i, j " )
    
//     return (
//       // <View style={css.mainBody}>
//       <View
//         style={{
//           flexDirection: "row",
//           justifyContent: "center",
//           alignItems: "center",
//           paddingRight: 30,
//           paddingLeft: 30,
//         }}
//       >
//         <ScrollView horizontal={true}>
//           <View>
//             <Table borderStyle={{ borderWidth: 1, borderColor: "#C1C0B9" }}>
//               <Row
//                 data={headerText}
//                 widthArr={columnsWidth}
//                 style={styles.header}
//                 textStyle={styles.text}
//               />
//             </Table>
//             <ScrollView style={styles.dataWrapper}>
//               <Table borderStyle={{ borderWidth: 1, borderColor: "#C1C0B9" }}>
//                 {tableData.map((rowData, index) => (
//                   <Row
//                     key={index}
//                     data={rowData}
//                     widthArr={columnsWidth}
//                     style={[
//                       styles.row,
//                       index % 2 && { backgroundColor: "#F7F6E7" },
//                     ]}
//                     textStyle={styles.text}
//                   />
//                 ))}
//               </Table>
//             </ScrollView>
//           </View>
//         </ScrollView>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
//   header: { height: 50, backgroundColor: "#537791" },
//   text: { textAlign: "center", fontWeight: "bold" },
//   dataWrapper: { marginTop: -1 },
//   row: { height: 40, backgroundColor: "#E7E6E1" },
// });
