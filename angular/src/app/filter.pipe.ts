import { Pipe, PipeTransform } from '@angular/core';
import { SearchTeacher } from './class/searchTeacher';
@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Transform
   *
   * @param {SearchTeacher[]} items
   * @param {string} searchText
   * @param {string} searchPrice
   * @param {string} searchPlace
   * @returns {SearchTeacher[]}
   */
  //  searchPhone: string, searchFirstName: string, searchLastName: string,
  transform(items: SearchTeacher[], searchText: string, searchPrice: string,searchPlace: string): any[] {
    if (!items) {
      return [];
    }


    //  !searchPhone && !searchFirstName && !searchLastName &&
    if (!searchText && !searchPrice&& !searchPlace) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
    // searchPhone = searchPhone.toLocaleLowerCase();
    // searchLastName = searchLastName.toLocaleLowerCase();
    // searchFirstName = searchFirstName.toLocaleLowerCase();
    searchPrice = searchPrice.toLocaleLowerCase();
    searchPlace = searchPlace.toLocaleLowerCase();
    return items.filter(it => {
      if (it.SubjectName == null)
       return it.PriceForLesson.toString().includes(searchPrice);
      else {
        return it.SubjectName.toLocaleLowerCase().includes(searchText) &&
          // it.phone.toString().includes(searchPhone) &&
          // it.firstName.toLocaleLowerCase().includes(searchFirstName) &&
          // it.lastName.toLocaleLowerCase().includes(searchLastName) &&
          it.PriceForLesson.toString().includes(searchPrice);
          // it..toString().includes(searchPrice);
      }
    });
  }

  // public  teacherName:string;
  //   public password:string;
  //   public  SubjectName :string;
  //   public  PriceForLesson:number
  //   public  LessonLength:number
  //   public  GradesRange :string


  // transform(value: SearchTeacher[], filterBy : string) : any[] {
  //     filterBy = filterBy ? filterBy.toLocaleLowerCase(): null;
  //     return filterBy? value.filter((teacher : SearchTeacher)=>
  //     teacher.teacherName.toLocaleLowerCase().indexOf(filterBy) ! ==-1) : value; 
  //  }

}