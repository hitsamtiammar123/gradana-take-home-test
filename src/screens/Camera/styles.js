export default {
  wrapper: {
    flex: 1,
    backgroundColor: 'black',
  },
  preview: {
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    image: {
      height: 400,
    },
    control: {
      container: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 100,
        alignItems: 'center',
      },
      button: {
        width: 60,
        height: 60,
        borderRadius: 45,
        alignItems: 'center',
        justifyContent: 'center',
      },
      accept: {
        backgroundColor: 'green',
        marginRight: 10,
      },
      reject: {
        backgroundColor: 'red',
      },
      text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 13,
      },
    },
  },
  camera: {
    container: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    control: {
      container: {
        flexDirection: 'row',
        height: 100,
        justifyContent: 'center',
        paddingBottom: 20,
      },
      button: {
        width: 60,
        height: 60,
        borderRadius: 45,
        backgroundColor: 'white',
      },
    },
  },
};
