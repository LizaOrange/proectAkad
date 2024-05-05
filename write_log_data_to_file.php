<?php

// Получаем текущую дату и время
$dateTime = date('Y-m-d H:i:s');

// Получаем данные из POST запроса
$data = json_decode(file_get_contents('php://input'), true);

// Проверяем, что данные получены корректно
if ($data && is_array($data)) {
    // Открываем файл для записи (если его нет, он будет создан)
    $file = fopen("log_data_to_file.txt", "a"); // "a" означает, что данные будут добавлены в конец файла

    // Записываем дату и время создания записи
    fwrite($file, "Дата: " . $dateTime .  '; ');
    fwrite($file, "ФИО: " . $data['firstName'] .  '; ');
    fwrite($file, "Телефон: " . $data['phone'] .  '; ');
    fwrite($file, "Email: " . $data['email'] .  '; ');
    fwrite($file, "Категория: " . $data['category'] .  '; ');
    fwrite($file, "Трудоустройство: " . $data['employment'] .  '; ');
    fwrite($file, "Образование: " . $data['education'] .  '; ');
    fwrite($file, "Регион: " . $data['region'] . '; ');
    fwrite($file, "Программа: " . $data['program'] . PHP_EOL);

    // Закрываем файл
    fclose($file);

    // Отправляем ответ клиенту
    http_response_code(200); // Успешный ответ
    echo json_encode(array("message" => "Данные успешно записаны в файл."));
} else {
    // Если данные не получены, отправляем ошибку
    http_response_code(400); // Ошибка запроса
    echo json_encode(array("message" => "Ошибка: Данные не получены."));
}

?>
