
import $ from "jquery";


    export function Login() {
        console.log("working!");
        $(function() {
            const email="akhil.pattipati1@gmail.com";
            const pass="akhil1234";
            const login_object = {username:email, password:pass};

            $.ajax({
                type: "POST",
                data: JSON.stringify(login_object),
                url: "http://127.0.0.1:8000/userProfile/login/",
                contentType: "application/json; charset=utf-8",
                success: function(data) {
                    console.log(data);
                }
            });
        });
    }
