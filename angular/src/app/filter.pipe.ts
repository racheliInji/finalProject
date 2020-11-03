import { Pipe, PipeTransform } from '@angular/core';
import { SearchTeacher } from './class/searchTeacher';
@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Transform
   *
   @param {SearchTeacher[]} items
   * @param {string} searchText
   * @param {string} searchPrice
   * @param {string} searchPriceHigh
    @param {string} searchPlace
   * @returns {SearchTeacher[]}
   */
  //  searchPhone: string, searchFirstName: string, searchLastName: string,
  transform(items: SearchTeacher[], searchText: string, searchPrice: string,searchPriceHigh: string,searchPlace:string): any[] {
    if (!items) {
      return [];
    }
  //  debugger;

    //  !searchPhone && !searchFirstName && !searchLastName &&
    if (!searchText && !searchPrice&& !searchPriceHigh&& !searchPlace) {
      return items;
    }

    

    searchText = searchText.toLocaleLowerCase();
    // searchPhone = searchPhone.toLocaleLowerCase();
    // searchLastName = searchLastName.toLocaleLowerCase();
    // searchFirstName = searchFirstName.toLocaleLowerCase();
    // searchPrice = searchPrice.toLocaleLowerCase();
     searchPlace = searchPlace.toLocaleLowerCase();

    return items.filter(it => {
      if (it.SubjectName == null)
       return it.PriceForLesson.toString().includes(searchPrice);
       if(searchPrice && !searchPriceHigh && !searchPlace){
        if(searchText=='')
        return  it.PriceForLesson>=Number(searchPrice);
        else return it.SubjectName.toLocaleLowerCase().includes(searchText) && it.PriceForLesson>=Number(searchPrice);
      }
      else if(searchPrice && !searchPriceHigh && searchPlace){
        if(searchText=='')
        return  it.PriceForLesson>=Number(searchPrice)&& it.city.toLocaleLowerCase().includes(searchPlace);
        else return it.SubjectName.toLocaleLowerCase().includes(searchText)&& it.city.toLocaleLowerCase().includes(searchPlace) && it.PriceForLesson>=Number(searchPrice);
      }
      if(!searchPrice && searchPriceHigh && !searchPlace){
        if(searchText=='')
        return  it.PriceForLesson<=Number(searchPriceHigh);
        else return it.SubjectName.toLocaleLowerCase().includes(searchText) && it.PriceForLesson<=Number(searchPriceHigh)
        }
       else if(!searchPrice && searchPriceHigh && searchPlace){
          if(searchText=='')
          return  it.PriceForLesson<=Number(searchPriceHigh)&& it.city.toLocaleLowerCase().includes(searchPlace);
          else return it.SubjectName.toLocaleLowerCase().includes(searchText)&& it.city.toLocaleLowerCase().includes(searchPlace) && it.PriceForLesson<=Number(searchPriceHigh);
          }
        if(!searchPrice && !searchPriceHigh && searchText){
          if(!searchPlace)
          return it.SubjectName.toLocaleLowerCase().includes(searchText);
          else  return it.SubjectName.toLocaleLowerCase().includes(searchText)&& it.city.toLocaleLowerCase().includes(searchPlace);
          }
          if(!searchPrice && !searchPriceHigh && !searchText && searchPlace){
            return it.city.toLocaleLowerCase().includes(searchPlace);
          }

      else {
        return it.SubjectName.toLocaleLowerCase().includes(searchText) &&
          // it.phone.toString().includes(searchPhone) &&
          // it.firstName.toLocaleLowerCase().includes(searchFirstName) &&
          // it.lastName.toLocaleLowerCase().includes(searchLastName) &&
          // it.PriceForLesson.toString().includes(searchPrice);
          // it.PriceForLesson.toString().includes(searchPrice);
          it.city.toLocaleLowerCase().includes(searchPlace)&&
          it.PriceForLesson>=Number(searchPrice)&& it.PriceForLesson<=Number(searchPriceHigh);

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