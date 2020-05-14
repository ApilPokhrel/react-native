import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';



export default MainActivity = () => {

    const [data, setData] = useState();

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(res => {
          setData(res);
        })
        .catch(error => {
          console.log(error);
        });   
    }, [])

    
    return (
      <View style={styles.container}>
        <FlatList
         data={dataSource}
         extraData={data} //for re-render the Flatlist d
          renderItem={({item}) => <View><Image
          style={styles.tinyLogo}
          source={{
            uri: item.video_url,
          }}
        />
        
        <Text>{item.title}</Text>
        <Text>{item.desc}</Text></View>}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
