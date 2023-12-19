import { StyleSheet } from 'react-native';

// Her laver vi en Global StyleSheet hvor de andre sider i appen kan hente styling fra
export default StyleSheet.create({
    homeText: {
        top: 20,
      alignItems: 'center',
      fontSize: 30,
      fontWeight: 'bold',
      },
      homeText2: {
        top: 30,
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 20,
      },
      textAddBoat:{
      margin: 10, 
      fontSize: 23, 
      fontWeight: 'bold'
      },
      textInput: {
        borderColor: '#4097ed', 
        width: 100,
        borderWidth: 1, 
        marginBottom: 10, 
        paddingHorizontal: 10,
        borderRadius: 10,
        marginRight: 10
      },
      textInputDescription: {
        padding: 10,
        height: 100,
        borderColor: '#4097ed',
        borderWidth: 1,
        width: '100%',
        paddingHorizontal: 10,
        borderRadius: 10,
      },
      fabButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 200,
        backgroundColor: 'white',
        borderColor: '#4097ed',
        borderWidth: 2,
      },
      homeViewer: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#fff',
      }, 
      homeViewer2: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
      },
      homeViewerImage: {
        flex: 3, 
        justifyContent: 'center', 
        alignItems: 'center'
      },
      homeImage: {
        width: 400, 
        height: 300, 
        borderRadius: 20
      },
      homeViewerButton: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
      },
      homeButton: {
        marginTop: 20, 
        marginLeft: 50, 
        marginRight: 50, 
        backgroundColor: 'blue'
      },
      boatCard: {
        padding: 5, 
        margin:5
      },
      boatCardImage: {
        paddingBottom: 5
      },
      boatCardText: {
        fontSize: 15, 
        paddingBottom: 5
      },
      Button: {
        bottom: -80,
        alignItems: 'center',
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 10,
        backgroundColor: '#2a46d1',
      },

      Button2: {
        bottom: -100,
        alignItems: 'center',
        fontSize: 35,
        fontWeight: 'bold',
        backgroundColor: '#239e50',
      },

    flatListCards: {
        padding: 5,
        width: '95%',
        margin: 10,
    },
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      backgroundColor: '#fff',
    },
  profileContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
  },
  mapContainer: {
      flex: 1,
  },
  map: {
    flex: 1
  },
  calloutText: {
    textAlign: 'center'
  },
  calloutImage: {
    width: 100, 
    height: 100, 
    alignSelf: 'center'
  },
  calloutButton: {
    marginTop: 10
  },
  profilImageBackground: {
    width: 430, 
    height: 230, 
    top: 0, 
    borderRadius: 20
  },
  profileImage: {
    width: 150, 
    height: 150, 
    top: -100, 
    borderRadius: 400, 
    borderWidth: 3, 
    borderColor: '#fff'
  },
  profileName: {
    fontSize: 30, 
    fontWeight: 'bold', 
    top: -100 
  },
  profileType: {
    fontSize: 20, 
    top: -100 
  },
  profileInfo: {
    marginBottom: 10
  },
  addBoatViewer1: {
    backgroundColor: '#fff',
    flex: 1, 
    justifyContent: 'flex-start', 
    alignItems: 'center'
  },
  addBoatViewer2: {
    width: '100%', 
    alignItems: 'center', 
    justifyContent: 'center',
    flexDirection: 'row'
  },
  addBoatViewerButton: {
    width: '100%', 
    alignItems: 'center', 
    justifyContent: 'center', 
    position: 'absolute', 
    bottom: 20
  },
  addBoatButton: {
    borderRadius: 10,
     width: '90%', 
     backgroundColor: '#4097ed'
  },
  input: {
    height: 40,
    borderColor: 'gray', 
    borderWidth: 1, 
    marginBottom: 10, 
    width: '90%', 
    paddingHorizontal: 10,
    borderRadius: 10
  },
  creatuserlogin: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  logoutbutton1: {
    marginTop: 10,
    backgroundColor: 'blue',
},
logoutbutton2: {
  marginTop: 10,
  backgroundColor: 'red',
},
profilBoatOwnerCard: {
  backgroundColor: '#4097ed',
  padding: 5, 
  margin: 18, 
  width: '95%',
  shadowColor: '#000',
  shadowRadius: 3,
  shadowOpacity: 0.4,
},
profileOwnerContainer: {
  flex: 1, 
  backgroundColor: '#fff'
},
profileOwnerCardViewer: {
  alignItems: 'center',
  backgroundColor: '#fff',
},
cardImageOwner: {
  width: 130, 
  height: 130, 
  borderRadius: 100,
  alignSelf: 'flex-end',
  marginTop: -35,
  borderColor: 'white',
  borderWidth: 1.5,
},
titleCardOwner: {
  fontSize: 30,
},
textCardOwnerTop: {
  marginTop: -125,
  fontSize: 25,
  fontWeight: 'bold',
  color: 'white',
  
},
textCardOwner: {
  marginTop: 4,
  fontSize: 17,
  color: 'white',
},
  profileEditbutton: {
    marginTop: 10,
    backgroundColor: 'blue',
    borderRadius: 10,
  },
postEditbutton: {
  width: '100%',
  marginTop: 10,
  backgroundColor: 'white',
  alignSelf: 'center',
  borderRadius: 10,
},
cardImagePost: {
  width: 120, 
  height: 70, 
  marginTop: 10,
  borderRadius: 10,
  alignSelf: 'flex-end',
  shadowRadius: 3,
  shadowOpacity: 0.4,
},
postEditButtonText: {
  color: '#ffffff',
  fontSize: 18,
},
profilBoatOwnerInsideCard : {
  backgroundColor: '#fff'
},
textCardOwnerTop1: {
  marginTop: -73,
  fontSize: 27,
  fontWeight: 'bold',
},
textCardOwner2: {
  fontSize: 20,
  marginTop: 5,
},
textCardOwner3: {
  fontSize: 25,
  marginBottom: 12,
  marginTop: 10,
  fontWeight: 'bold',
  color: '#4097ed',
},
profileEditbutton2: {
  marginTop: 7,
  backgroundColor: 'red',
  borderRadius: 10,
},
addBoatButtonText: {
  color: 'white',
},
});