// app.js

const express = require('express');
const videoApi = require('./instance'); // 引入你的 Axios 实例

const app = express();
const port = 3000;

app.get('/api/:videoid', async (req, res) => {
    try {
        // 添加允许所有源的头部
        res.header('Access-Control-Allow-Origin', '*');
        const { videoid } = req.params;
        console.log("get a req")
        // 使用 Axios 实例发起请求，替换URL中的videoid
        const response = await videoApi.get(`https://netflav5.com/api98/video/v2/retrieveVideo/${videoid}`);
        // 处理数据
        const originResult = response.data.result // 处理你的数据逻辑
        const urlPattern = /(https?:\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?)/g;

    	const urls = originResult.match(urlPattern) || []; // 防止 urls 为 null

    	const filteredUrls = urls.filter(url => !url.endsWith('.jpg'));
    	const qualityUrls = filteredUrls.filter(url => {
      		const host = new URL(url).hostname;
      		return host !== 'www.avple.video' && host !== 'asianclub.tv' && host !== 'google.com';
    	});
        const result = {
              status : "ok",
              message : qualityUrls
        }
        // 返回处理后的数据
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/', async (req, res) => {
    try {
        // 添加允许所有源的头部
        res.header('Access-Control-Allow-Origin', '*');
        console.log("get a req")
        // 返回处理后的数据
        res.send("hello world");
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
