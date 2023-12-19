import AsyncStorage from '@react-native-async-storage/async-storage';


//Gemmer token, userID og boatOwner i asyncstorage
export const storeToken = async ({userToken, userID, boatOwner}) => {
  console.log(userToken, userID, boatOwner)
  try {
    await AsyncStorage.setItem('userToken', userToken);
    await AsyncStorage.setItem('userID', userID);
    await AsyncStorage.setItem('boatOwner', boatOwner);
  } catch (error) {
    // Handle errors
  }
};
//Opdaterer boatowner i asyncstorage
export const updateBoatOwner = async (boatOwner) => {
  
  try {
    await AsyncStorage.setItem('boatOwner', boatOwner);
  } catch (error) {
    // Handle errors
  }
};

//Henter token fra asyncstorage
export const getToken = async () => {
  try {
    const userToken = await AsyncStorage.getItem('userToken');
    if (userToken !== null) {
      
      return userToken
    } else {
     return null
    }

    
  } catch (error) {
    // Handle errors
   
    return null;
    
  }
};

//Henter userID fra asyncstorage
export const getID = async () => {
  try {
    const userID = await AsyncStorage.getItem('userID');
    if (userID !== null) {
      
      return userID
    } else {
     return null
    }

    
  } catch (error) {
    // Handle errors
   
    return null;
    
  }
};

//Henter boatOwner fra asyncstorage
export const getBoatOwner = async () => {
  try {
    const boatOwner = await AsyncStorage.getItem('boatOwner');
   
    if (boatOwner !== null) {
      
      return boatOwner
    } else {
     return null
    }

    
  } catch (error) {
    // Handle errors
   
    return null;
    
  }
};

//Sletter token fra asyncstorage
export const logout = async () => {
  
  try {

    await AsyncStorage.removeItem('userToken');
  
    
  } catch (error) {
    // Handle errors
  }
}