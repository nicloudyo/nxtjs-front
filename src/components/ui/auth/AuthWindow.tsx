export const Auth = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
            <div className="border-8 border-[#5E7F68] rounded-4xl w-[500px] h-[400px] bg-white flex flex-col items-center justify-center p-8 shadow-lg">
                <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">Войдите в личный кабинет!</h2>
                <div className="mb-4 w-full max-w-[300px]">
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="Введите Email" 
                        className="w-full px-3 py-2 bg-[#5E7F6894] border placeholder-black border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"/>
                </div>
                <div className="mb-6 w-full max-w-[300px]">
                    <input
                        type="password" 
                        id="password" 
                        placeholder="Введите пароль" 
                        className="w-full px-3 py-2 placeholder-black border bg-[#5E7F6894] border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"/>
                </div>
                <button className="w-40 py-2 px-4 rounded-2xl mb-3 text-white transition duration-200 bg-[#5E7F68] hover:bg-[#4a6a56]">Войти</button>
                <div className="text-center">
                    <a href="RegistrationLink" className="text-black hover:text-gray-700 ">Регистрация</a>
                </div>
            </div>
        </div>
    )
}