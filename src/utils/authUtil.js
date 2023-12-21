import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';


// function for getting the cookies

class AuthService {
    getJwt() {
        return  Cookies.get('JWT')
    }

    getUserId() {
        const token = this.getJwt()
        if(token) {
            const decoded = jwtDecode(token);
            return decoded.userId
        } else {
            return null;
        }
    }

    isLoggedIn() {
        const token = this.getJwt()
        if (token) {
            const decoded = jwtDecode(token)
            const isExpired = decoded.exp < (Date.now() / 1000)
            return token && !isExpired ? true : false;
        } else {
            return false;
        }
    }
}

export default new AuthService;
