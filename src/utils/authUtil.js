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
        }
    }

    isLoggedIn() {
        const token = this.getJwt()
        const decoded = jwtDecode(token)
        const isExpired = decoded.exp < (Date.now() / 1000)
        return token && !isExpired ? true : false;
    }

}

export default new AuthService;
