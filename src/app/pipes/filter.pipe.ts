import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
        if(!items) return [];
        if(!searchText) return items;
        searchText = searchText.toLowerCase();
        return items.filter( item => {
            /*
                field on which we have add filter here we have use name from array
                I have used filter for name and amenity type fields
            */
                return (item.name.toLowerCase().includes(searchText)) || (item.amenitytype.toLowerCase().includes(searchText));

        });
    }
}
