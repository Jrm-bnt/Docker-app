CREATE TABLE IF NOT EXISTS `clients` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `nom` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL
);

INSERT INTO `clients` (`nom`, `email`) VALUES
  ('John Doe', 'john.doe@example.com'),
  ('Jane Smith', 'jane.smith@example.com'),
  ('Alice Johnson', 'alice.johnson@example.com'),
  ('Bob Wilson', 'bob.wilson@example.com'),
  ('Eve Brown', 'eve.brown@example.com');
