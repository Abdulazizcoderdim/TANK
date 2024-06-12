const Telegraf = require('telegraf');
const Extra = require('telegraf/extra');
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN)

//fayldan o"qish
bot.command('otloq', (ctx) => ctx.replyWithPhoto({source: 'images/depositphotos_375832726-stock-illustration-vector-cartoon-standing-brown-horse.jpg'}))
bot.command('bali', (ctx) => ctx.replyWithPhoto({source: 'images/istockphoto-157191956-1024x1024.jpg'}))
bot.command('otloq', (ctx) => ctx.replyWithPhoto({source: 'images/pxfuel.jpg'}))
bot.command('otloq', (ctx) => ctx.replyWithPhoto({source: 'images/twitter-logo.webp'}))


