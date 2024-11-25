const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');

const cash = Number(input[0]); // 초기 현금
const prices = input[1].split(' ').map(Number); // 14일간의 주식 가격

// BNP 전략 구현
function calculateBNP(cash, prices) {
    let shares = 0; // 보유 주식 수
    let money = cash; // 남은 현금

    for (let price of prices) {
        const canBuyShares = Math.floor(money / price); // 매수 가능한 주식 수
        shares += canBuyShares; // 주식 추가
        money -= canBuyShares * price; // 사용된 현금 차감
    }

    // 마지막 자산 계산
    return money + shares * prices[prices.length - 1];
}

// TIMING 전략 구현
function calculateTIMING(cash, prices) {
    let shares = 0; // 보유 주식 수
    let money = cash; // 남은 현금

    let upCount = 0; // 3일 연속 상승일 경우 체크
    let downCount = 0; // 3일 연속 하락일 경우 체크

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) { // 전날보다 가격 상승
            upCount++;
            downCount = 0;
        } else if (prices[i] < prices[i - 1]) { // 전날보다 가격 하락
            downCount++;
            upCount = 0;
        } else { // 가격 변동 없음
            upCount = 0;
            downCount = 0;
        }

        // 3일 연속 상승 → 전량 매도
        if (upCount >= 3 && shares > 0) {
            money += shares * prices[i]; // 주식을 모두 팔아 현금 추가
            shares = 0;
        }

        // 3일 연속 하락 → 전량 매수
        if (downCount >= 3) {
            const canBuyShares = Math.floor(money / prices[i]); // 매수 가능한 주식 수
            shares += canBuyShares; // 주식 추가
            money -= canBuyShares * prices[i]; // 사용된 현금 차감
        }
    }

    // 마지막 자산 계산
    return money + shares * prices[prices.length - 1];
}

// 결과 계산
const bnpAssets = calculateBNP(cash, prices); // BNP 전략 결과
const timingAssets = calculateTIMING(cash, prices); // TIMING 전략 결과

// 결과 출력
if (bnpAssets > timingAssets) {
    console.log("BNP");
} else if (bnpAssets < timingAssets) {
    console.log("TIMING");
} else {
    console.log("SAMESAME");
}
