const otpContainer = document.querySelector('.otp-container');
const mobileVerify = document.querySelector('.mobile-verify');
const boxVerify = document.querySelector('.box-verify');
const btnContinue = document.querySelector('.btn-continue');
const btnResend = document.querySelector('.btn-resend');
const btnVerify = document.querySelector('.btn-verify');
const btnBack = document.querySelector('.btn-back');
const phoneNumber = document.getElementById('phone-number');
const otpInput = document.querySelectorAll('.otp-input .input');
const containerContent = document.querySelector('.container-content, .container-contentpass');
const expireEle = document.querySelector('.expire');

// OTP
let expire = 30;
let OTP;
let countdown;
let yourInputNumber = '';

btnContinue.addEventListener('click', () => {
    // set default expire
    resetStateOTP();
    // phone number have 10 digits
    const phoneNumberExist = phoneNumber.value.match(/^\d{10}$/g);

    if (phoneNumberExist) {
        // handle animate
        otpContainer.classList.remove('go-right');
        mobileVerify.classList.remove('go-right');
        // handle for keyboard
        otpContainer.classList.add('active-box');
        mobileVerify.classList.remove('active-box');

        // reset alert text
        alertText('.phone-num-input .text-danger', '');
        // set phone number to DOM
        document.querySelector('.phone').textContent = formatPhoneNumber(
            phoneNumberExist
        );
        // handle OTP
        OTP = randomOTP();
        handleCountDown();
        alert(`Your OTP: ${OTP}`);
        console.log(OTP);
    } else {
        alertText(
            '.phone-num-input .text-danger',
            'Hãy nhập số điện thoại'
        );
    }
});


// back to set number screen
btnBack.addEventListener('click', () => {
    otpContainer.classList.add('go-right');
    otpContainer.classList.remove('active-box');
    mobileVerify.classList.add('go-right', 'active-box');
});

// handle OTP input
otpInput.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        const element = e.target;

        if (element.value.match(/\d/)) {
            yourInputNumber += element.value;
            alertText('.otp-container .text-danger', '');

            if (element.nextElementSibling) {
                element.nextElementSibling.focus();
            }
        } else {
            alertText(
                '.otp-container .text-danger',
                'Enter a number in each field'
            );
        }
    });
});

// handle verify button
btnVerify.addEventListener('click', () => {
    const icon = boxVerify.querySelector('.fas');

    if (OTP === yourInputNumber) {
        icon.classList.add('fa-check-circle');
        icon.classList.remove('fa-times-circle');
        boxVerify.querySelector('p').innerHTML = `
        <!-- Password -->
        <div class="form-group">
          
          <input type="password" id="password1" class="pass"placeholder="Mật khẩu" required
            pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
            title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number." />
        </div>
        
        <!-- Confirm Password -->
        <div class="form-group">
        
          <input type="password" id="password2" class="pass" placeholder="Nhập lại mật khẩu" name="password" required
            pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$" />
        </div>
                <span class='text-muted'> <form action="../Đăng nhập/login2.html">
                <button class="csw-btn-button" type="submit">Cập nhật mật khẩu</button>
            </form></span>
                `;

               
            } else {
               
                icon.classList.remove('fa-check-circle');
                icon.classList.add('fa-times-circle');
                boxVerify.querySelector('p').innerHTML = ` 
               <p style = "font-size:15px"> Mã OTP không đúng</p>
                <br/>
                <span class='text-muted'><span class='btn-return text-dark' style="font-size:15px">Thử lại</span></span>
                `;
            }
            boxVerify.classList.add('active');
        });
        
// handle btn return
containerContent.addEventListener('click', (e) => {
    const element = e.target;
    if (element.classList.contains('btn-return')) {
        boxVerify.classList.remove('active');

        activeStateOTP();
    }
});

// handle btn request again
btnResend.addEventListener('click', activeStateOTP);

// handle keyboard for element has class active-box
window.addEventListener('keydown', (e) => {
    const key = e.key;
    const keyEle = document.querySelector(
        `.active-box span[data-key='${key.toLowerCase()}']`
    );

    if (keyEle) {
        keyEle.classList.add('active');
        setTimeout(() => {
            keyEle.classList.remove('active');
        }, 500);
    }
});

function handleCountDown() {
    countdown = setInterval(() => {
        expire--;
        if (expire === 0) {
            clearInterval(countdown);
            OTP = null;
            console.log(OTP);
        }
        expireEle.textContent = expire < 10 ? '0' + expire + 's' : expire + 's';
    }, 1000);
}

function alertText(element, text) {
    document.querySelector(`${element}`).textContent = text;
}

function randomOTP() {
    let random = '';
    Array.from({ length: 4 }, () => {
        random += Math.floor(Math.random() * 10).toString();
    });
    return random;
}
function resetStateOTP() {
    clearInterval(countdown);
    expire = 30;
    OTP = null;
    yourInputNumber = '';

    otpInput.forEach((input) => {
        input.value = '';
    });
}
function formatPhoneNumber(number) {
    return number.toString().slice(0, 7) + '***';
}

function activeStateOTP() {
    resetStateOTP();

    OTP = randomOTP();
    handleCountDown();
    alert(`Your OTP: ${OTP}`);
    console.log(OTP);
}
