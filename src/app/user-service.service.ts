import { Injectable } from '@angular/core';
import userList from '../assets/json/costumer-list.json'
import userDetails from '../assets/json/costumer-details.json'
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }
  list: {
    id: number
    username: string
  }[] = userList

  details:   {
    "id": number,
    "username": string,
    "firstName": string,
    "lastName": string,
    "aboutMe": string
  }[] = userDetails
  
  selectedUser: {
    "id": number,
    "username": string,
    "firstName": string,
    "lastName": string,
    "aboutMe": string
  } | undefined
}
