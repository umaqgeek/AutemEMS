import {
  // ADD_ALUMNI,
  REMOVE_ALUMNI,
  UPDATE_ALUMNI,
  REMOVE_ALL_ALUMNI,
  VIEW_ALUMNI,
  SET_CURR_ALUMNI,
  GET_CURR_ALUMNI
} from './actionTypes';

import {
  BASE_URL,
  uiStartLoading,
  uiStopLoading
} from './index';

import { fetcher } from '../models';

export const setCurrentAlumni = (alumni) => {
  return {
    type: SET_CURR_ALUMNI,
    alumni: alumni
  };
};

export const getCurrentAlumni = (alumni) => {
  return {
    type: GET_CURR_ALUMNI,
    alumni: alumni
  };
};

export const addAlumni = (alumni) => {
  // return {
  //   type: ADD_ALUMNI,
  //   alumni: alumni
  // };

  return dispatch => {

    dispatch(uiStartLoading());
    fetcher('alumnis.json', 'GET').then(alumnisGlobal => {
      
      var alumnis = [];
      if (alumnisGlobal) {
        for (var key in alumnisGlobal) {
          alumnis.push(alumnisGlobal[key]);
        }
      }

      var findAlumni = alumnis.find(al => {
        if (al.email) {
          return al.email.toLowerCase() === alumni.email.toLowerCase()
        }
        return;
      });
      if (typeof findAlumni === 'undefined') {
        fetcher('alumnis.json', 'POST', alumni).then(al => {
          console.log('Alumni: ' + JSON.stringify(al));
        });
      } else {

        if (alumnisGlobal) {
          for (var key in alumnisGlobal) {
            if (alumnisGlobal[key].email.toLowerCase() === alumni.email.toLowerCase()) {
              alumnisGlobal[key].phone = alumni.phone;
            }
          }
        }
        fetcher('alumnis.json', 'PUT', alumnisGlobal).then(al => {
          console.log('Alumni: ' + JSON.stringify(al));
        });
      }

    });
    dispatch(uiStopLoading());

    // dispatch(uiStartLoading());
    // fetch(BASE_URL + "/alumnis")
    // .then(res => res.json())
    // .then(parsedRes => {
    //   const alumnis = parsedRes;
    //   let findAlumni = alumnis.find(al => {
    //     return al.email.toLowerCase() === alumni.email.toLowerCase()
    //   });
    //   if (typeof findAlumni === 'undefined') {
    //     fetch(BASE_URL + "/alumnis", {
    //       method: "POST",
    //       headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(alumni)
    //     })
    //     .catch(err => {
    //       console.log('addAlumni: ' + err);
    //       dispatch(uiStopLoading());
    //     })
    //     .then(res => res.json())
    //     .then(parsedRes => {
    //       console.log('Error alumni: ' + parsedRes);
    //     });
    //   }
    //   dispatch(uiStopLoading());
    // })
    // .catch(err => {
    //   console.log('findAlumni: ' + err);
    //   dispatch(uiStopLoading());
    // });
  };
};

export const removeAlumni = (alumni) => {
  return {
    type: REMOVE_ALUMNI,
    alumniId: alumni.id
  };
};

export const updateAlumni = (alumni) => {
  return {
    type: UPDATE_ALUMNI,
    alumniId: alumni.id,
    alumni: alumni
  };
};

export const removeAllAlumni = () => {
  return {
    type: REMOVE_ALL_ALUMNI
  };
};

export const viewAlumni = () => {
  return {
    type: VIEW_ALUMNI
  };
};
