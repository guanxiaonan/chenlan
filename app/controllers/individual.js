'use strict';

import Individual from '../models/individual';

//main
exports.main = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/main', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}

//hot
exports.hot = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/hot', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}
//cuihuo
exports.cuihuo = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/cuihuo', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}
//huihuo
exports.huihuo = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/huihuo', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}
//leng
exports.leng= async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/leng', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}
//hotguan
exports.hotguan= async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/hotguan', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}
//hotshi
exports.hotshi= async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/hotshi', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}
//cuiguan
exports.cuiguan= async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/cuiguan', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}
//cuishi
exports.cuishi= async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/cuishi', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}
//lengguan
exports.lengguan= async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/lengguan', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}
//lengshi
exports.lengshi= async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/lengshi', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}
//huiguan
exports.huiguan= async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/huiguan', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}
//huishi
exports.huishi= async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/huishi', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}
//hotjia
exports.hotjia= async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/hotjia', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}

//post-hot1
exports.ctlhot1= async function(ctx, next){
  console.log(ctx.request.body);
  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/hot1', {   //默认后缀名为html
     title: '回火炉处理数据',
     user: ctx.session.user,
     now_date:ctx.request.body
   })
  }
}
//cuijia
exports.cuijia= async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/cuijia', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}
//huijia
exports.huijia= async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/huijia', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}
//lengjia
exports.lengjia= async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/lengjia', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}
