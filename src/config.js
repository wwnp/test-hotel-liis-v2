/* eslint-disable no-useless-escape */
export const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const passwordPattern = /.{8,}/
export const options = { year: 'numeric', month: 'long', day: 'numeric' };
export const RATE = "RATE"
export const PRICE = "PRICE"
export const FAV_ITEMS_LENGTH = 3
export const pageDomain = '/test-hotel-liis-v2'
export const CARDS_PER_PAGE = 3
export const MAX_FAVS = 15