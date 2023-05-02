import { GitSearchItems } from '@/domain/models'
import { atom } from 'recoil'

export const searchInput = atom({
  key: 'searchInput',
  default: {
    isLoading: false,
    isFormInvalid: false,
    search: '',
    searchList: [] as GitSearchItems[]
  }
})
