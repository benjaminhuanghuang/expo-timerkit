## React Native support style array
```
const lapDigitsStyle = [
    styles.lapDigits,
    isFastest && styles.fastest,
    isSlowest && styles.slowest
  ];
```



## Use classnames 
```
 <span className={classnames("nav-prev", {"nav-disabled": isPrevDisabled})}
```


## Ues Object.assign
```
let lapDigitsStyle = {...styles.lapDigits};

if (isFastest)
{
  Object.assign(lapDigitsStyle, styles.fastest)
}
if (isSlowest)
{
  Object.assign(lapDigitsStyle, styles.slowest)
}
```