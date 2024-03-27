//사용방법
//1. npm i 로 의존성 설치
//2. node server.js 로 명령어 실행

// 코인 정보 요청 주소
//http://127.0.0.1:8000/btc-bitcoin/

// 코인 차트 정보 요청 주소
//http://127.0.0.1:8000/btc-bitcoin/chart

// 코인 상세정보 요청 주소
// http://127.0.0.1:8000/btc-bitcoin/detail

const express = require("express");
// 코인 전체 정보
const data = require("./serverPublic/data.json"); // your json file path

//가격정보(상세정보)
const btcDetailData = require("./serverPublic/coinDetail/btcBitcoin.json");
const ethDetailData = require("./serverPublic/coinDetail/ethEthereum.json");
const usdtDetailData = require("./serverPublic/coinDetail/usdtTether.json");
const bnbDetailData = require("./serverPublic/coinDetail/bnbBinance.json");
const solDetailData = require("./serverPublic/coinDetail/solSolana.json");

//해당 코인 심플 정보
const btcInfoData = require("./serverPublic/coinInfo/btcCoin.json");
const ethInfoData = require("./serverPublic/coinInfo/ethEthereum.json");
const usdtInfoData = require("./serverPublic/coinInfo/usdtTether.json");
const bnbInfoData = require("./serverPublic/coinInfo/bnbBinanceCoin.json");
const solInfoData = require("./serverPublic/coinInfo/solSolana.json");

//해당 코인 차트 정보
const btcChartData = require("./serverPublic/coinHistory/btcCoin.json");
const ethChartData = require("./serverPublic/coinHistory/ethEthereum.json");
const usdtChartData = require("./serverPublic/coinHistory/usdtTether.json");
const bnbChartData = require("./serverPublic/coinHistory/bnbBinanceCoin.json");
const solChartData = require("./serverPublic/coinHistory/solSolana.json");

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/:coin/chart", function (req, res, next) {
  switch (req.params.coin) {
    case "btc-bitcoin": //http://127.0.0.1:8000/btc-bitcoin/chart
      res.send(btcChartData);
      res.end();
      break;
    case "eth-ethereum": //http://127.0.0.1:8000/eth-ethereum/chart
      res.send(ethChartData);
      res.end();
      break;
    case "usdt-tether": //http://127.0.0.1:8000/usdt-tether/chart
      res.send(usdtChartData);
      res.end();
      break;
    case "bnb-binance-coin": //http://127.0.0.1:8000/bnb-binance-coin/chart
      res.send(bnbChartData);
      res.end();
      break;
    case "sol-solana": //http://127.0.0.1:8000/sol-solana/chart
      res.send(solChartData);
      res.end();
      break;
    default:
      res.status(500);
      res.end();
  }
});

app.get("/:coin/detail", function (req, res, next) {
  switch (req.params.coin) {
    case "btc-bitcoin": //http://127.0.0.1:8000/btc-bitcoin/detail
      res.send(btcInfoData);
      res.end();
      break;
    case "eth-ethereum":
      res.send(ethInfoData);
      res.end();
      break;
    case "usdt-tether":
      res.send(usdtInfoData);
      res.end();
      break;
    case "bnb-binance-coin":
      res.send(bnbInfoData);
      res.end();
      break;
    case "sol-solana":
      res.send(solInfoData);
      res.end();
      break;
    default:
      res.status(500);
      res.end();
  }
});

app.get("/:coin", function (req, res, next) {
  switch (req.params.coin) {
    case "btc-bitcoin":
      res.send(btcDetailData);
      res.end();
      break;
    case "eth-ethereum":
      res.send(ethDetailData);
      res.end();
      break;
    case "usdt-tether":
      res.send(usdtDetailData);
      res.end();
      break;
    case "bnb-binance-coin":
      res.send(bnbDetailData);
      res.end();
      break;
    case "sol-solana":
      res.send(solDetailData);
      res.end();
      break;
    default:
      res.status(500);
      res.end();
  }
});

app.get("/", function (req, res, next) {
  res.send(data);
  res.end();
});

app.listen(8000, () => console.log("Example app listening on port 8000!"));
