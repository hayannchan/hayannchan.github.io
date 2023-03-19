<!DOCTYPE html>
<html>
    <head>
        <title>Задание 3</title>
        <meta name="viewport" content="width=device-width initial-scale=1"> 
        <script src="script.js" defer></script>
        <link rel="stylesheet" href="css/notmain.css">

    <meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	
	<link rel="stylesheet" href="css/main.css">
	
	<script src="libs/gsap/gsap.min.js" defer></script>
	<script src="libs/gsap/ScrollTrigger.min.js" defer></script>
	<!-- плагин для плавной прокрутки -->
	<script src="libs/gsap/ScrollSmoother.min.js" defer></script>
	<!-- defer не блокирует загрузку всего контента, который в body, а загружается после всего контента -->
	<script src="js/app.js" defer></script>
    </head>
    <body>

    <div class="wrapper">
		<div class="content">
		
			<header class="main-header">
				<div class="layers">
					<div class="layers__header">
						<div class="layers__caption">Абитуриентам</div>
						<div class="layers__title">ФКТиПМ</div>
					</div>
					<div class="layer layers__base" style="background-image: url(img/layer-base.png);"></div> 
					<div class="layer layers__middle" style="background-image: url(img/layer-middle.png);"></div> 
					<!-- передний план -->
					<div class="layer layers__front" style="background-image: url(img/layer-front.png);"></div> 
				</div>
			</header>

			<article class="main-article" style="background-image: url(img/dungeon.png);">
				<div class="main-article__content">
                <form action="form.php" method="POST">
            <label>
                Имя:<br>
                <input name="name"
                  placeholder="Имя" required>
              </label><br>
        
              <label>
                E-mail:<br>
                <input name="email"
                  type="email"
                  placeholder="e-mail" required>
              </label><br>
        
              <label>
                Год рождения:<br>
                <select name="year">
                    <?php 
                    for ($i = 1923; $i <= 2023; $i++) {
                      printf('<option value="%d">%d год</option>', $i, $i);
                    }
                    ?>
                  </select>
              </label><br>
              
              <label>Пол:</label> <br>
              <label><input type="radio"
                name="gender" value="0" required>
                Мужской</label>
              <label><input type="radio"
                name="gender" value="1" required>
                Женский</label><br>
        
              <label>Количество:</label> <br>
              <label><input type="radio"
                name="limbs" value="1" required>
                1</label>
              <label><input type="radio"
                name="limbs" value="2" required>
                2</label>
              <label><input type="radio"
                name="limbs" value="3" required>
                3</label>
              <label><input type="radio" checked
                name="limbs" value="4" required>
                4</label><br>
        
            <label>
                Суперсилы:
                <br>
                <select name="powers[]"
                  multiple="multiple">
                  <option value="Invincibility">Бессмертие</option>
                  <option value="Noclip">Хождение сквозь стены</option>
                  <option value="Levitation">Левитация</option>
                </select>
              </label><br>
        
              <label>
                Биография:<br>
                <textarea name="biography"></textarea>
              </label><br>
        
              Согласие c лицензионным соглашением:<br>
              <label><input type="checkbox"
                name="check" required>
                Да</label><br>
        
              <input type="submit" value="Отправить">
            </form>
				</div>
			</article>
			
		</div>
	</div>

    </body>
</html>