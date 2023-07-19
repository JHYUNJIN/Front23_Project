const onRegister=()=>{
  // 사용자가 ph input태그에 입력한 값은
  // phInput.value에 들어있다.
  let phInput = document.querySelector("#ph");
  let usernameInput=document.querySelector("#username");
  let emailInput=document.querySelector("#email");
  let check=true; // 회원가입성공 메세지 출력을 위한 코드

  //휴대폰번호 입력여부 확인
  let phErrMsg=document.querySelector("#ph_err_msg");

  if(phInput.value===''){//휴대폰번호를 입력하지 않았다는 의미
    phErrMsg.style.display='block';
    check=false;
  }
  else{ //휴대폰번호가 입력된 경우
    phErrMsg.style.display='none';
  }

  let usernameErrMsg=document.querySelector("#username_err_msg");
  if(usernameInput.value===''){//이름을 입력하지 않았다는 의미
    usernameErrMsg.style.display='block';
    check=false;
  }
  else{
    usernameErrMsg.style.display='none';
  }

  let emailErrMsg=document.querySelector("#email_err_msg");
  if(emailInput.value===''){
    emailErrMsg.style.display='block';
    check=false;
  }
  else{ 
    emailErrMsg.style.display='none';
  }

  if(check){
    alert("아이디 받기 완료.")
  }
}