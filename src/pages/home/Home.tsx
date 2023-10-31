import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import timeAgo from '../../libs/time/time-ago';
import { Socket } from '../../socket/Socket.singleton';
import { Linking } from 'react-native';

interface FacebookPost {
  created_time?: Date;
  from?: {
    id?: string;
    name?: string;
  };
  groupId?: string;
  id: string;
  isNew?: boolean;
  message?: string;
  postId?: string;
  updated_time?: string;
}

function Home() {
    const [posts, setPosts] = useState<FacebookPost[]>([]);
    const [dataSocket, setDataSocket] = useState([])
    const socket = Socket
  
    useEffect(() => {
      if (socket) {
        socket?.on(
          'nhandon',
          (data) => {
            setDataSocket(data)
  
          },
        );
      }
    }, []);
  
    useEffect(() => {
      const newPosts = getPosts(posts, dataSocket)
      setPosts(newPosts.slice(0, 20))
    }, [dataSocket]); // Theo dõi sự thay đổi của biến posts
    
    const getPosts = (array1: any[], dataSocket: any[]) => {
        const uniqueIds = new Set(array1.map((item: any) => item.id));
        const postNews = dataSocket.filter((item: any) => !uniqueIds.has(item.id)).map((item: any) => {
            return {
            ...item,
            isNew: true
            }
        })

        const postOlds = posts.map((item: any) => {
            return {
            ...item,
            isNew: false
            }
        })

        const combinedArray = [...postOlds, ...postNews]

        combinedArray.sort(function(a: any, b: any) {
            var dateA = new Date(a.created_time).getTime();
            var dateB = new Date(b.created_time).getTime();
            return dateB - dateA;
        })

        return combinedArray
    }
    
    const redirectFbPost = (postId: string, groupId: string) => {
      return Linking.openURL(`https://www.facebook.com/groups/${groupId}/permalink/${postId}/`);
    }

    const Item = ({ created_time, from, groupId, isNew, message, postId }: FacebookPost) => (
      <View style={isNew ? styles.item  : styles.itemNew }>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.name}>{from?.name??'Người ẩn danh'}</Text>
            <Text style={isNew ? styles.timeNew : styles.time}>({timeAgo(created_time as Date)})</Text>            
          </View>
          <View style={styles.headerRight}>
            <Text style={styles.name}>Phí: 20k</Text>
          </View>

        </View>
        <View>
          
          <Text style={styles.contentText}>
            {message}
          </Text>
        </View>
        <View style={styles.handle}>
          <Text style={styles.button} onPress={() => redirectFbPost(postId as string, groupId as string)}>Nhận</Text>
        </View>
      </View>
    );

    return (
      <>
        {posts.length > 0 ?
          <SafeAreaView style={styles.container}>
            <FlatList
              data={posts}
              renderItem={({item}) => 
                <Item 
                  from={item.from} 
                  message={item.message} 
                  id={item.id} 
                  groupId={item.groupId}
                  isNew={item.isNew}
                  postId={item.postId}
                  created_time={item.created_time}
                />
                }
                keyExtractor={item => item.id
              }
            />
          </SafeAreaView>           
          : 
          <View style={styles.spin}>
            <ActivityIndicator size="large" />
          </View> 
        }
      </>
    );
}

export default Home

const styles = StyleSheet.create({
  spin: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10
  },
  itemNew: {
    backgroundColor: '#af9ec2',
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerRight: {

  },
  name: {
    color: 'red',
    fontSize: 16
  },
  time: {
    paddingLeft: 10
  },
  timeNew: {
    color: 'blue',
    paddingLeft: 10
  },
  contentText: {
    fontSize: 17
  },
  handle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  button: {
    width: 100,
    height: 35,
    borderRadius: 10,
    textAlign: 'center',
    lineHeight: 30,
    backgroundColor: 'blue',
    color: 'white',
    fontSize: 16,
  }
});