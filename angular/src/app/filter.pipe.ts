import { Pipe, PipeTransform } from '@angular/core';
import { SubjectToTeacher } from './class/subject-to-teacher';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Transform
   *
   * @param {SubjectToTeacher[]} items
   * @param {string} searchText
   * @param {string} searchPrice
   * @returns {SubjectToTeacher[]}
   */
  //  searchPhone: string, searchFirstName: string, searchLastName: string,
  transform(items: SubjectToTeacher[], searchText: string, searchPrice: string): any[] {
    if (!items) {
      return [];
    }
    //  !searchPhone && !searchFirstName && !searchLastName &&
    if (!searchText && !searchPrice) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
    // searchPhone = searchPhone.toLocaleLowerCase();
    // searchLastName = searchLastName.toLocaleLowerCase();
    // searchFirstName = searchFirstName.toLocaleLowerCase();
    searchPrice = searchPrice.toLocaleLowerCase();
    return items.filter(it => {
      if (it.SubjectName == null)
       return it.PriceForLesson.toString().includes(searchPrice);
      else {
        return it.SubjectName.toLocaleLowerCase().includes(searchText) &&
          // it.phone.toString().includes(searchPhone) &&
          // it.firstName.toLocaleLowerCase().includes(searchFirstName) &&
          // it.lastName.toLocaleLowerCase().includes(searchLastName) &&
          it.PriceForLesson.toString().includes(searchPrice);
      }
    });
  }

  // public  teacherName:string;
  //   public password:string;
  //   public  SubjectName :string;
  //   public  PriceForLesson:number
  //   public  LessonLength:number
  //   public  GradesRange :string


  // transform(value: SubjectToTeacher[], filterBy : string) : any[] {
  //     filterBy = filterBy ? filterBy.toLocaleLowerCase(): null;
  //     return filterBy? value.filter((teacher : SubjectToTeacher)=>
  //     teacher.teacherName.toLocaleLowerCase().indexOf(filterBy) ! ==-1) : value; 
  //  }

}