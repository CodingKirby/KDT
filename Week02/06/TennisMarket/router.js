function route(pathname, handle, response, productId) { // route 함수 정의: pathname과 handle을 인자로 받음
    if (typeof handle[pathname] === 'function') { // handle 객체에 pathname 키가 존재하고, 그 값이 함수일 경우
        console.log("pathname: " + pathname); // request.url 출력, console.log란 터미널에 출력하는 함수
        handle[pathname](response, productId); // handle 객체의 pathname 키에 해당하는 함수 호출
    } else { // handle 객체에 pathname 키가 존재하지 않을 경우
        console.log("No request handler found for " + pathname); // request.url 출력
        response.writeHead(404, {"Content-Type": "text/html"}); // 응답 헤더 작성: 404는 Not Found를 의미, Content-Type은 text/html로 설정
        response.write("404 Not found"); // 응답 본문 작성: body에 404 Not found를 출력
        response.end(); // 응답 종료: 클라이언트에게 응답을 전송하고 응답을 종료
    }
}

exports.route = route; // route 함수를 외부에서 사용할 수 있도록 exports 객체에 저장