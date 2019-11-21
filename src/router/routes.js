import Home from '../pages/Home/Home.vue'
import Discounts from '../pages/Discounts/Discounts.vue'
import Search from '../pages/Search/Search.vue'
import Equip from '../pages/Equip/Equip.vue'
import Profile from '../pages/Profile/Profile.vue'

export default [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/discounts',
    component: Discounts,
  },
  {
    path: '/search',
    component: Search,
  },
  {
    path: '/equip',
    component: Equip,
  },
  {
    path: '/profile',
    component: Profile,
  },

]