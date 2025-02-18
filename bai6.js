import React, { useState } from "react";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const validatePhone = (phoneNumber) => {
    const phoneRegex = /^(0[3-9])+([0-9]{8})$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePhone(phone)) {
      setError("Số điện thoại không hợp lệ");
    } else {
      setError("");
      alert("Số điện thoại hợp lệ!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-xl font-bold mb-4">Đăng nhập</h2>
        <p className="text-gray-600 text-sm mb-2">
          Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản OneHousing Pro
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="tel"
            className="w-full p-2 border border-gray-300 rounded mt-2"
            placeholder="Nhập số điện thoại"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 mt-4 rounded"
          >
            Tiếp tục
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
