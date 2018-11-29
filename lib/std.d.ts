/*
  Here declare lua functions that will exist in the runtime environment
*/
declare function print(...messages: any[]): void;
// declare function require(module: string): any;
declare function printf(formatted: string, ...args: any[]): void;

declare function sprintf(formatted: string, ...args: any[]): string;

declare function tostring(num: number): string;

declare namespace table {

  function sort<T>(arr: Array<T>, sortBy: (i: T, j: T) => boolean): void;


  // from vendor.utils
  function deepcopy<T>(orig: T): T;
  function merge<T>(first: T, second: T): T;

}

declare namespace math {

  /**
   * inclusive 
   */
  function random(lower: number, upper: number): number

  /**
   * inclusive
   */
  function random(upper: number): number
  function floor(fl: number): number
}

declare namespace os {

  /**
   * This function is too crazy in its full generality.
   * It can:  
   *   - transform os time to date  
   *   - return current time&date in string format  
   *   - return current time&date in Lua table format  
   * We will be using only formatting into a string, obviously :|  
   * %a	abbreviated weekday name (e.g., Wed)  
   * %A	full weekday name (e.g., Wednesday)  
   * %b	abbreviated month name (e.g., Sep)  
   * %B	full month name (e.g., September)  
   * %c	date and time (e.g., 09/16/98 23:48:10)  
   * %d	day of the month (16) [01-31]  
   * %H	hour, using a 24-hour clock (23) [00-23]  
   * %I	hour, using a 12-hour clock (11) [01-12]  
   * %M	minute (48) [00-59]  
   * %m	month (09) [01-12]  
   * %p	either "am" or "pm" (pm)  
   * %S	second (10) [00-61]  
   * %w	weekday (3) [0-6 = Sunday-Saturday]  
   * %x	date (e.g., 09/16/98)  
   * %X	time (e.g., 23:48:10)  
   * %Y	full year (1998)  
   * %y	two-digit year (98) [00-99]  
   * %%	the character `%´  
   * @param format Suggested: %Y-%m-%dT%H:%M:%S+01:00
   */
  function date(format: string): string
}