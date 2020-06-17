const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod ? 'https://tanvirmahin.herokuapp.com/' : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://tanvirmahin.herokuapp.com/',
  'process.env.CLIENT_ID': '6ZXORIFR1F4iiw5QhR2wZxcYjiUEbd6F'
}