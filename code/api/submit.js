// 文件：/api/submit.js
// 注意：Vercel Serverless Functions 默认使用 Node.js 环境

export default async function handler(req, res) {
  // 1. 设置 CORS 头部，解决跨域问题，允许你的前端域名访问
  // 在生产环境中，建议将 * 替换为你的具体前端域名，如 'https://your-landing-page.vercel.app'
  res.setHeader('Access-Control-Allow-Origin', 'https://ai-pose-oy59.vercel.app/');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // 2. 处理预检请求
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // 3. 只允许 POST 请求
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // 4. 获取前端发送的邮箱数据
    // 在 Next.js App Router 中，req.body 已经是对象
    const email = req.body.email;

    // 5. 简单的数据验证
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'A valid email address is required.' });
    }

    // 6. 准备发送到 Sheety API 的数据
    const sheetyData = {
      subscriber: {
        email: email,
        timestamp: new Date().toISOString(), // 添加提交时间戳
      }
    };

    // 7. 调用 Sheety API，将数据写入 Google Sheets
    const apiKey = process.env.SHEETY_API_KEY || 'mytoken159753';
    const sheetyResponse = await fetch(
      "https://api.sheety.co/354f1f3acc14978abf23117fd168850f/email/subscribers",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify(sheetyData)
      }
    );

    const sheetyResult = await sheetyResponse.json();

    // 8. 检查 Sheety 的响应
    if (!sheetyResponse.ok) {
      console.error('Sheety API Error:', sheetyResult);
      console.error('Status Code:', sheetyResponse.status);
      console.error('Status Text:', sheetyResponse.statusText);
      console.error('Request Headers:', {
        'Authorization': 'Bearer mytoken159753',
        'Content-Type': 'application/json'
      });
      throw new Error(sheetyResult.error || 'Failed to write to sheet');
    }

    // 9. 成功响应给前端
    console.log('Email successfully recorded:', email);
    res.status(200).json({
      success: true,
      message: 'Thank you for subscribing!',
      sheetyId: sheetyResult.subscriber.id
    });

  } catch (error) {
    // 10. 错误处理
    console.error('Serverless Function Error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal Server Error. Please try again later.'
    });
  }
}
