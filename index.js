
var host = document.querySelector("#loginform");
var shadowroot = host.attachShadow({mode :'open'})
var linkEle = document.createElement('html');
linkEle.className="app";
linkEle.innerHTML = ` 

<head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<link rel="stylesheet" href="index.css">
<body>
<div class="mb-3">
<label for="name" class="form-label">User Name</label>
<input type="text" class="form-control form-type" id="name" placeholder="Enter Name">
</div>
<div class="mb-3">
<label for="password" class="form-label">Password</label>
<input type="password" class="form-control form-type" id="name" placeholder="Password Dummy">
</div>
<button type="button" class="btn btn-primary">Login</button>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>
</body>
</head>
`
shadowroot.appendChild(linkEle);

// Action on Login Button
var shost = document.querySelector("#loginform").shadowRoot;

var loginBtn = shost.querySelector('button[type=button]');
loginBtn.addEventListener('click', ()=> {
    let inputValue = shost.querySelector('input#name').value;
    confirm('Hello ..... '+inputValue);
})


