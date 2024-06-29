SELECT p.product_name,SUM(od.quantity) AS total_quantity
FROM order_details od
JOIN orders o ON od.order_id = o.order_id
JOIN products p ON od.product_id = p.product_id
WHERE YEAR(o.order_date) = 2016
GROUP BY  od.product_id
ORDER BY total_quantity DESC
LIMIT 5;
