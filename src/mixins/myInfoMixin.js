import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      myInfo: state => state.user.myInfo
    })
  }
}