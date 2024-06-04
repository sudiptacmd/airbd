export default function LoginPage () {
    return (
        <div className="mt-20" action="">
            <h1 className="text-primary text-4xl text-center font-extrabold">LOGIN</h1>
            <form className="mx-auto max-w-lg login-form">
                <input type="email" placeholder="yourname@email.com"/>
                <input type="password" placeholder="sthdifficult" />
                <button>Login</button>
            </form>
        </div>
    )
}