export const validateLogin = (email, password) => {
    if (!email.trim() || !password.trim()) {
      return 'Email and password are required'
    }
    if (!email.includes('@')) {
      return 'Email must contain @'
    }
    // 1. Kiểm tra độ dài phải trên 6 ký tự
    if (password.length <= 6) {
        return 'Password must be more than 6 characters'
    }
    // 2. Kiểm tra phải chứa ít nhất 1 chữ viết hoa
    const hasUppercase = /[A-Z]/.test(password)
    if (!hasUppercase) {
        return 'Password must contain at least one uppercase letter'
    }
    // 3. Kiểm tra phải chứa ít nhất 1 ký tự đặc biệt (!@#$%^&*...)
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>_]/.test(password)
    if (!hasSpecialChar) {
        return 'Password must contain at least one special character'
    }
    return null
  }
  
export const validateFeedback = ({ course, rating }) => {
    if (!course || !course.trim()) return 'Course name is required'
    const r = Number(rating)
    if (!rating || isNaN(r) || r < 1 || r > 5) return 'Rating must be between 1 and 5'
    return null
  }

  