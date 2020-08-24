# Serega Mangushev  
Junior WEB-разработчик, Россия.  

[TOCM]

# Skills 
### html/css
#### HTML
```html
<!DOCTYPE html>
<html>
    <head>
        <mate charest="utf-8" />
        <title>Skills</title>  
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"> 
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,500&display=swap"
    rel="stylesheet">
        <meta name="description" content="skills html">  
        <link rel="stylesheet" href="./src/styles.css"> 
    </head>
<body>
    <main class="page">
        <section class="page__product product center-items"> 
		<h2 class="product__title">HTML</h2>
            <div class="row wrapper">
                <div class="product__item col3">
                    <h3 class="product__subtitle">HTML - Skills</h3>
                    <img src="#" alt="test">
                    <p class="product__text">Высокий уровень знаний чистого HTML.</p>
                </div>
                <div class="product__item col3">
                    <h3 class="product__subtitle">CSS - Skills</h3>
                    <img src="#" alt="test">
                    <p class="product__text">Отличные навыки стилей..</p>
                </div> 
            </div>
        </section>
    </main>
    <script src="#"></script>
</body>
</html>
``` 

#### CSS - first level
```css
* {
    scroll-behavior: smooth;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 100%;
    border: 0;
    outline: none;
}

body,
html {
    overflow-x: hidden;
} 

.center-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
} 

.wrapper {
    width: 100%;
    padding: 15px;
    max-width: 1280px;
    margin: 0 auto;
}
```  
 
#### CSS - second level
```css
.page__product {
    padding: 50px 0;
}

.product__title {
    font-size: 34px;
    color: #000;
    letter-spacing: 2px;
}

.row {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.product__item {
    flex: 1 33.333%;
    padding: 15px;
    margin: 15px;
    background-color: #fff;
    box-shadow: 4px 2px 24px -8px rgba(0, 0, 0, 1);
    border-radius: 5px;
} 

.product__subtitle {
    font-size: 22px;
    color: #000;
}

.product__text {
    font-size: 18px;
    color: #000;
}
``` 

#### CSS - third level
```css
.product__item {
    position: relative;
    transition: 0.2s;
}

.product__item:hover {
    transform: translateY(5px);
}

.product__item:before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: 100%;
    height: 10px;
    background-color: #000;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}
``` 
#### Посмотреть: 
[![](https://hostadvice.com/wp-content/uploads/2017/04/codebox-logo-e1595399885122.png)](https://codesandbox.io/s/htmlcss-dso9f?file=/index.html "Открыть в редакторе.")