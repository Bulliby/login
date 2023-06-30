// ************************************************************************** //
//                                                                            //
//                                                                            //
//   consts.js                                                                //
//                                                        ________            //
//   By: bulliby <wellsguillaume+at+gmail.com>           /   ____/_  _  __    //
//                                                      /    \  _\ \/ \/ /    //
//   Created: 2020/07/24 16:35:41 by bulliby            \     \_\ \     /     //
//   Updated: 2020/09/01 21:06:33 by bulliby             \________/\/\_/      //
//                                                                            //
// ************************************************************************** //

const ConstsLoader = Object.create(null);

// Rename alert to exception
const Alert = {
    INFO: 0,
    ERROR: 1,
    SUCCESS: 2,
    WARNING: 3,
    NOTHING: 4
}

const Links = {
    LOGIN: 0,
    SIGNUP: 1,
    FORGOT_PASSWORD: 2,
    PLAY: 3
}

const HttpCode = {
    UNAUTHORIZED: 401,
    CSRF: 422,
    OK: 200,
    NOCONTENT: 204,
}

const General = {
    UNEXPECTED_BEHAVIOUR: "Something bad happened please contact an adminstrator at contact+at+wellsguillaume.fr",
}

const Consts = { Alert, Links, HttpCode, General};

export default function getConst(constObject, key) {
  return Consts[constObject][key];
}
