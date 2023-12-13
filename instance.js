// instance.js

const axios = require('axios');
const https = require('https');
const headers = {
  'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
  'Accept-Encoding':'gzip, deflate, br',
  'Accept-Language':'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7,en-GB;q=0.6',
  'Sec-Ch-Ua': '"Microsoft Edge";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
  'Content-Type': 'application/json',
  'Sec-Ch-Ua-Mobile': '?0',
  'Sec-Ch-Ua-Platform': '"Windows"',
  'Sec-Fetch-Dest': 'document',
  'Sec-Fetch-Mode': 'navigate',
  'Sec-Fetch-Site': 'none',
  'Sec-Fetch-User': '?1',
  'Cookie': 'i18next=zh',
  'Upgrade-Insecure-Requests': '1',
  'User-Agent' :
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 Edg/119.0.0.0',
  'Connection': 'keep-alive'
};

// 创建一个 Axios 实例
const instance = axios.create({
  timeout: 5000, // 超时时间，单位毫秒
  headers: headers,
  httpsAgent: new https.Agent({ rejectUnauthorized: false }) // 忽略证书错误
});

// 在这里可以添加拦截器、认证信息等

module.exports = instance;

