export default {
  wrapper: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  profile: {
    container: {
      flex: 1,
      borderWidth: 1,
      borderColor: 'lightgray',
      borderRadius: 5,
      marginBottom: 20,
    },
    mr5: {
      marginRight: 5,
    },
    image: {
      height: 100,
      overflow: 'hidden',
      backgroundColor: 'lightgray',
    },
    detail: {
      flex: 1,
      paddingVertical: 10,
    },
    textContainer: {
      flexDirection: 'row',
    },
    text: {
      fontSize: 12,
      flex: 1,
      color: 'gray',
      lineHeight: 18,
    },
  },
};
