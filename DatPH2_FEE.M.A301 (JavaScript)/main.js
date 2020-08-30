var titleQuiz = document.getElementsByClassName("title-quiz");
var listQuiz = document.getElementsByClassName("list-quiz");
var pre = document.getElementsByClassName("pre");
var next = document.getElementsByClassName("next");
var myPoint = document.getElementById("my-point");
// biến checkSubmited mặc định sẽ là false, khi đã nhấn submit sẽ là true
var checkSubmited = false;
// dữ liệu lấy từ sever
var myData = [
    {
        titleQuiz: "java script là gì?",
        listQuiz: [
            {
                content: "chính là java",
                adAnswer: false,
                myAnswer: false,
            },
            {
                content: "ngôn ngữ lập trình backend",
                adAnswer: true,
                myAnswer: false,
            },
            {
                content: "ngôn ngữ lập trình frontend",
                adAnswer: true,
                myAnswer: false,
            },
            {
                content: "không phải ngôn ngữ lập trình",
                adAnswer: false,
                myAnswer: false,
            },
        ],
        point: 10
    },
    {
        titleQuiz: "học java script cơ hội việc làm cao không?",
        listQuiz: [
            {
                content: "cao",
                adAnswer: true,
                myAnswer: false,
            },
            {
                content: "không thấp",
                adAnswer: true,
                myAnswer: false,
            },
            {
                content: "đủ giàu",
                adAnswer: true,
                myAnswer: false,
            },
            {
                content: "giống phương án a nhưng cao hơn nữa",
                adAnswer: true,
                myAnswer: false,
            },
        ],
        point: 10
    },
    {
        titleQuiz: "học js thì nên học ai",
        listQuiz: [
            {
                content: "học chị Hương",
                adAnswer: true,
                myAnswer: false,
            },
            {
                content: "học anh Hổ",
                adAnswer: true,
                myAnswer: false,
            },
            {
                content: "tự học",
                adAnswer: false,
                myAnswer: false,
            },
        ],
        point: 80
    },
    {
        titleQuiz: "title 4",
        listQuiz: [
            {
                content: "one",
                adAnswer: true,
                myAnswer: false,
            },
            {
                content: "two",
                adAnswer: false,
                myAnswer: false,
            },
            {
                content: "three",
                adAnswer: false,
                myAnswer: false,
            },
            {
                content: "four",
                adAnswer: false,
                myAnswer: false,
            },
        ],
        point: 10
    },
    {
        titleQuiz: "title 5",
        listQuiz: [
            {
                content: "one",
                adAnswer: true,
                myAnswer: false,
            },
            {
                content: "two",
                adAnswer: false,
                myAnswer: false,
            },
            {
                content: "three",
                adAnswer: false,
                myAnswer: false,
            },
            {
                content: "four",
                adAnswer: false,
                myAnswer: false,
            },
            {
                content: "five",
                adAnswer: false,
                myAnswer: false,
            },
        ],
        point: 10
    },
    {
        titleQuiz: "title 6",
        listQuiz: [
            {
                content: "one",
                adAnswer: true,
                myAnswer: false,
            },
            {
                content: "two",
                adAnswer: false,
                myAnswer: false,
            },
            {
                content: "three",
                adAnswer: false,
                myAnswer: false,
            },
            {
                content: "four",
                adAnswer: false,
                myAnswer: false,
            },
            {
                content: "five",
                adAnswer: false,
                myAnswer: false,
            },
            {
                content: "six",
                adAnswer: false,
                myAnswer: false,
            },
        ],
        point: 10
    },
    {
        titleQuiz: "title 7",
        listQuiz: [
            {
                content: "one",
                adAnswer: true,
                myAnswer: false,
            },
            {
                content: "two",
                adAnswer: false,
                myAnswer: false,
            },
            {
                content: "three",
                adAnswer: false,
                myAnswer: false,
            },
            {
                content: "four",
                adAnswer: false,
                myAnswer: false,
            },
        ],
        point: 10
    },
    {
        titleQuiz: "title 8",
        listQuiz: [
            {
                content: "one",
                adAnswer: true,
                myAnswer: false,
            },
            {
                content: "two",
                adAnswer: false,
                myAnswer: false,
            },
            {
                content: "three",
                adAnswer: false,
                myAnswer: false,
            },
            {
                content: "four",
                adAnswer: false,
                myAnswer: false,
            },
        ],
        point: 10
    },
    {
        titleQuiz: "title 9",
        listQuiz: [
            {
                content: "one",
                adAnswer: true,
                myAnswer: false,
            },
            {
                content: "two",
                adAnswer: false,
                myAnswer: false,
            },
            {
                content: "three",
                adAnswer: false,
                myAnswer: false,
            },
            {
                content: "four",
                adAnswer: false,
                myAnswer: false,
            },
        ],
        point: 10
    },
    {
        titleQuiz: "title 10",
        listQuiz: [
            {
                content: "one",
                adAnswer: true,
                myAnswer: false,
            },
            {
                content: "two",
                adAnswer: false,
                myAnswer: false,
            },
            {
                content: "three",
                adAnswer: false,
                myAnswer: false,
            },
            {
                content: "four",
                adAnswer: false,
                myAnswer: false,
            },
        ],
        point: 10
    },
    {
        titleQuiz: "title 11",
        listQuiz: [
            {
                content: "one",
                adAnswer: true,
                myAnswer: false,
            },
            {
                content: "two",
                adAnswer: false,
                myAnswer: false,
            },
            {
                content: "three",
                adAnswer: false,
                myAnswer: false,
            },
            {
                content: "four",
                adAnswer: false,
                myAnswer: false,
            },
        ],
        point: 10
    },
    {
        titleQuiz: "title 12",
        listQuiz: [
            {
                content: "one",
                adAnswer: true,
                myAnswer: false,
            },
            {
                content: "two",
                adAnswer: false,
                myAnswer: false,
            },
            {
                content: "three",
                adAnswer: false,
                myAnswer: false,
            },
            {
                content: "four",
                adAnswer: false,
                myAnswer: false,
            },
        ],
        point: 10
    },
    {
        titleQuiz: "title 13",
        listQuiz: [
            {
                content: "one",
                adAnswer: true,
                myAnswer: false,
            },
            {
                content: "two",
                adAnswer: false,
                myAnswer: false,
            },
            {
                content: "three",
                adAnswer: false,
                myAnswer: false,
            },
            {
                content: "four",
                adAnswer: false,
                myAnswer: false,
            },
        ],
        point: 10
    },
    {
        titleQuiz: "title 14",
        listQuiz: [
            {
                content: "one",
                adAnswer: true,
                myAnswer: false,
            },
            {
                content: "two",
                adAnswer: false,
                myAnswer: false,
            },
            {
                content: "three",
                adAnswer: false,
                myAnswer: false,
            },
            {
                content: "four",
                adAnswer: false,
                myAnswer: false,
            },
        ],
        point: 10
    },
    {
        titleQuiz: "title 15",
        listQuiz: [
            {
                content: "one",
                adAnswer: true,
                myAnswer: false,
            },
            {
                content: "two",
                adAnswer: false,
                myAnswer: false,
            },
            {
                content: "three",
                adAnswer: false,
                myAnswer: false,
            },
            {
                content: "four",
                adAnswer: false,
                myAnswer: false,
            },
        ],
        point: 10
    },
    {
        titleQuiz: "title 16",
        listQuiz: [
            {
                content: "one",
                adAnswer: true,
                myAnswer: false,
            },
            {
                content: "two",
                adAnswer: false,
                myAnswer: false,
            },
            {
                content: "three",
                adAnswer: false,
                myAnswer: false,
            },
            {
                content: "four",
                adAnswer: false,
                myAnswer: false,
            },
        ],
        point: 10
    },
    {
        titleQuiz: "title 17",
        listQuiz: [
            {
                content: "one",
                adAnswer: true,
                myAnswer: false,
            },
            {
                content: "two",
                adAnswer: false,
                myAnswer: false,
            },
            {
                content: "three",
                adAnswer: false,
                myAnswer: false,
            },
            {
                content: "four",
                adAnswer: false,
                myAnswer: false,
            },
        ],
        point: 10
    },
    {
        titleQuiz: "title 18",
        listQuiz: [
            {
                content: "one",
                adAnswer: true,
                myAnswer: false,
            },
            {
                content: "two",
                adAnswer: false,
                myAnswer: false,
            },
            {
                content: "three",
                adAnswer: false,
                myAnswer: false,
            },
            {
                content: "four",
                adAnswer: false,
                myAnswer: false,
            },
        ],
        point: 10
    },
    {
        titleQuiz: "title 19",
        listQuiz: [
            {
                content: "one",
                adAnswer: true,
                myAnswer: false,
            },
            {
                content: "two",
                adAnswer: false,
                myAnswer: false,
            },
            {
                content: "three",
                adAnswer: false,
                myAnswer: false,
            },
            {
                content: "four",
                adAnswer: false,
                myAnswer: false,
            },
        ],
        point: 10
    },
    {
        titleQuiz: "title 20",
        listQuiz: [
            {
                content: "one",
                adAnswer: true,
                myAnswer: false,
            },
            {
                content: "two",
                adAnswer: false,
                myAnswer: false,
            },
            {
                content: "three",
                adAnswer: false,
                myAnswer: false,
            },
            {
                content: "four",
                adAnswer: false,
                myAnswer: false,
            },
        ],
        point: 10
    },
]
// end dữ liệu lấy từ sever

// nếu mảng dữ liệu không trống
if (myData.length != 0) {
    // countIndex : chứa vị trí của câu hỏi đang được render lên màn hình
    var countIndex = 0;

    // định nghĩa hàm render
    function render(countIndex) {
        titleQuiz[0].innerHTML = `${myData[countIndex].titleQuiz} <span class ="text-success">(${myData[countIndex].point} point)</span>`;

        // nếu chưa nhấn submit
        if(checkSubmited== false){  
        var listQuizInnerHTML = myData[countIndex].listQuiz.map(function (item, index) {
            return `<li class="form-check">
            <input class="form-check-input" type="checkbox" name="exampleRadios" value=""
            id="defaultCheck${index}" ${item.myAnswer ? "checked" : ""}>
            <label class="form-check-label" for="defaultCheck${index}">
            ${item.content}
            </label>
            </li>`
        })
        }else{//nếu đã nhấn submit hàm render thay đổi để có thể đổi màu đáp án cho những câu hỏi
        var listQuizInnerHTML = myData[countIndex].listQuiz.map(function (item, index) {
            return `<li class="form-check">
            <input class="form-check-input" type="checkbox" name="exampleRadios" value=""
            id="defaultCheck${index}" ${item.myAnswer ? "checked" : ""}>
            <label class="form-check-label ${item.adAnswer ? "text-danger":""}" for="defaultCheck${index}">
            ${item.content}
            </label>
            </li>`
        })
        }
        listQuiz[0].innerHTML = listQuizInnerHTML.join("");
    }

    // render lần đầu khi load trang web
    render(countIndex);

    // onclick kết hợp taget để xét sự kiện cho dữ liệu động (click vào các li trong ul)
    listQuiz[0].addEventListener("click", function (e) {
        if ((e.target && e.target.className == "form-check")
            || (e.target && e.target.className == "form-check-input")) {
            var listLiObj = document.getElementsByClassName("form-check");
            for (var i = 0; i < listLiObj.length; i++) {
                if (listLiObj[i] == e.target.parentNode || listLiObj[i] == e.target) {
                    if (myData[countIndex].listQuiz[i].myAnswer == true) {
                        myData[countIndex].listQuiz[i].myAnswer = false;
                    } else {
                        myData[countIndex].listQuiz[i].myAnswer = true;
                    }
                    render(countIndex);
                }
            }
        }
    });

    // onclick cho btn next
    next[0].onclick = function () {
        if (countIndex == myData.length - 1) { // khi nhấn submit
            checkSubmited = true;z
            showTatalPoint();
        } else { // khi nhấn next bình thường
            countIndex++;
            check();
            render(countIndex);
        }
    }

    // onclick cho btn previous
    pre[0].onclick = function () {
        countIndex--;
        check();
        render(countIndex);
    }

    // hàm check để xem có đang ở trang cuối và trang đầu hay không, hàm này phục vụ cho 2 hàm onclick ngay trên
    function check() {
        if (countIndex == 0) {
            pre[0].disabled = true;
        } else {
            pre[0].disabled = false;
        }
        if (countIndex == myData.length - 1) {
            next[0].innerHTML = "Submit";
        } else {
            next[0].innerHTML = "Next Question";
        }
    }

    // check lần đầu khi load trang web
    check();
    
    // định nghĩa hàm show điểm khi nhấn submit
    function showTatalPoint() {
        var totalPoint = 0;
        for (var i = 0; i < myData.length; i++) {
            var check = true;
            for (var j = 0; j < myData[i].listQuiz.length; j++) {
                if (myData[i].listQuiz[j].adAnswer != myData[i].listQuiz[j].myAnswer) {
                    check = false;
                }
            }
            if (check == true) {
                totalPoint += myData[i].point;
            }
        }
        myPoint.innerHTML = "Your point: " + totalPoint;
        render(countIndex);
    }
}

