import { StyleSheet } from "react-native";
import { shouldUseActivityState } from "react-native-screens";

/*
<View elevation={1} 
      style={{
        height: 100,
        width: "97%",
        margin: 5,
        backgroundColor: "#fff",
        border: 2.9,
        borderColor: "black",
        alignSelf: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 16,
        },
        shadowOpacity: 1,
        shadowRadius: 7.49
      }}
    >
      <Text style={{  textShadowColor: 'black', textShadowOffset: { width: 1, height: 3 },textShadowRadius: 10, fontSize: 40, fontWeight: '800', flex: 1, alignSelf: "center", paddingTop: 30, fontSize: 40}}>Latest articles</Text>
    </View>

*/

const styles = StyleSheet.create({
  activityIndicator: {
    alignItems: "center",
    height: 80,
  },
 
  animacaoQuique: (imageAnim) => ({
    transform: [{ translateY: imageAnim }],
    marginBottom: 240,
    justifyContent: "center",
    alignContent: "center",
  }),

  buttonStyle: {
    backgroundColor: "#7DE24E",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#7DE24E",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
    width:"50%",
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  },
  dropdownBtnStyle: {
    width: "40%",
    height: 35,
    backgroundColor: "#FFF",
    paddingHorizontal: 0,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#444",
    marginTop: 10,
  },
  dropdownBtnChildStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 1,
  },
  dropdownBtnImage: { width: 12, height: 12, resizeMode: "cover" },
  dropdownBtnTxt: {
    color: "#444",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    marginHorizontal: 12,
  },
  dropdownDropdownStyle: { backgroundColor: "slategray" },
  dropdownRowStyle: {
    backgroundColor: "slategray",
    borderBottomColor: "#444",
    height: 50,
  },
  dropdownRowChildStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 1,
  },
  dropdownRowImage: { width: 5, height: 5, resizeMode: "cover" },
  dropdownRowTxt: {
    color: "#F1F1F1",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    marginHorizontal: 12,
  },

  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
 
  FlatHeaderFooter: {
    flexDirection: "row",
    // width: "100%",
    height: 50,
    backgroundColor: "#606070",
    justifyContent: "center",
  },
  flatHeaderText: {
    color: "white",
    fontSize:14,
  },
  flatHeaderView: (bequigraund) => ({
    alignItems: "center",
    // backgroundColor: "#D8D8BF",
    backgroundColor: bequigraund,
    flexGrow: 1,
    // height:70,
    margin: 0,
    padding: 10,
    flex: 1,
  }),
  flatItemText: {
    color: "#333333",
  },
 
 flatItemView: (bequigraund) => ({
    alignItems: "center",
    justifyContent:"center",
    // backgroundColor: "#D8D8BF",
    backgroundColor: bequigraund,
    // flexGrow: 1,
    margin: 1,
    padding: 8,
    fontFamily: "monospace",
    flex:1,
  }),
  image: {
    width: "50%",
    height: 100,
    resizeMode: "contain",
    marginLeft: "25%",
    borderRadius: 15,
  },
  inputStyle: {
    flex: 1,
    color: "white",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#dadae8",
  },
  mainBody: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#307ecc",
    // alignContent: "center",
    // alignItems:"center",
  },
  profileHeader: {
    flexDirection: "row",
    backgroundColor: "#307ecc",
    padding: 15,
    textAlign: "center",
  },

  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: "#e2e2e2",
    marginTop: 15,
  },
  profileHeaderPicCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: "white",
    backgroundColor: "#ffffff",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 5,
    borderColor: "#3098cc",
  },
  profileHeaderSymbol: {
    fontSize: 25,
    color: "#307ecc",
  },
  profileHeaderText: {
    color: "white",
    alignSelf: "center",
    paddingHorizontal: 10,
    fontWeight: "bold",
    /*  fontFamily: "QuickSand", */
  },

  scrollViewContainer: {
    flexGrow: 1,
    // justifyContent: 'space-between',
    // alignItems: "center",
    paddingVertical: "1%",
    paddingBottom: "20%",
  },

  SectionStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  sideMenuContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#307ecc",
    paddingTop: 40,
    color: "white",
  },
  splashContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#307ecc",
  },
  splashLogo: (moldura) => ({
    width: "90%",
    resizeMode: "contain",
    borderRadius: 15,
    margin: 30,
    borderStyle: "dotted",
    borderWidth: 5,
    borderColor: moldura,
  }),
  Texto16: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    alignSelf: "center",
    padding: 10,
  },
  touchableOpacity: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  viewBasic: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  viewRadioButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor:"yellow",
    borderStyle: "solid",
    borderWidth: 1,
    // borderColor:"blue",
    borderRadius: 25,
    margin: 10,
  },
  viewTextRadio: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // borderStyle: "solid",
    // borderWidth: 1,
    // borderColor: "purple",
  },
});

export default styles;
