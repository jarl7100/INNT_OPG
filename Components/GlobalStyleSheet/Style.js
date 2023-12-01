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
      margin: 20, 
      fontSize: 19, 
      fontWeight: 'bold'
      },
      textInput: {
        height: 40,
        borderColor: 'gray', 
        borderWidth: 1, 
        marginBottom: 10, 
        width: '100%', 
        paddingHorizontal: 10
      },
      fabButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 200,
        backgroundColor: 'white',
        borderColor: 'blue',
        borderWidth: 3,
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
    flex: 1, 
    justifyContent: 'flex-start', 
    alignItems: 'center'
  },
  addBoatViewer2: {
    width: '100%', 
    paddingHorizontal: 20, 
    alignItems: 'center', 
    flex: 1, 
    justifyContent: 'center'
  },
  addBoatViewerButton: {
    width: '100%', 
    alignItems: 'center', 
    justifyContent: 'center', 
    position: 'absolute', 
    bottom: 20
  },
  addBoatButton: {
     width: '80%' 
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
}
});