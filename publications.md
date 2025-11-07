<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Publications - AIoT Laboratory</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f8f9fa;
            padding: 20px;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
        }
        .page-header {
            border-bottom: 2px solid #1a73e8;
            padding-bottom: 15px;
            margin-bottom: 30px;
        }
        .publications-intro {
            margin-bottom: 30px;
            font-size: 1.1rem;
            color: #555;
        }
        .year-section {
            margin-bottom: 30px;
        }
        .year-heading {
            color: #1a73e8;
            border-bottom: 1px solid #e0e0e0;
            padding-bottom: 8px;
            margin-bottom: 15px;
        }
        .publication-item {
            margin-bottom: 20px;
            padding: 15px;
            border-radius: 8px;
            background-color: #f8f9fa;
            transition: background-color 0.3s;
        }
        .publication-item:hover {
            background-color: #e9ecef;
        }
        .pub-title {
            font-weight: 600;
            margin-bottom: 5px;
            line-height: 1.4;
        }
        .pub-number {
            display: inline-block;
            background-color: #1a73e8;
            color: white;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            text-align: center;
            line-height: 30px;
            margin-right: 10px;
            font-weight: bold;
        }
        .title-links a {
            margin: 0 3px;
            color: #1a73e8;
            text-decoration: none;
        }
        .title-links a:hover {
            text-decoration: underline;
        }
        .pub-meta {
            font-size: 0.9rem;
            color: #666;
            margin-bottom: 5px;
        }
        .pub-authors {
            font-weight: 500;
        }
        .pub-venue {
            font-style: italic;
        }
        .award-badge {
            display: inline-block;
            background-color: #ffc107;
            color: #212529;
            padding: 3px 8px;
            border-radius: 4px;
            font-size: 0.8rem;
            margin-left: 10px;
            font-weight: 500;
        }
        .invited {
            background-color: #17a2b8;
            color: white;
        }
        .status-badge {
            display: inline-block;
            padding: 2px 6px;
            border-radius: 4px;
            font-size: 0.8rem;
            margin-left: 8px;
        }
        .accepted {
            background-color: #28a745;
            color: white;
        }
        .forthcoming {
            background-color: #6c757d;
            color: white;
        }
        .pub-note {
            font-size: 0.85rem;
            color: #6c757d;
            margin-top: 5px;
        }
        .publications-footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #e0e0e0;
            font-size: 0.9rem;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="page-header">
            <h1>Publications</h1>
            <p class="lead">Research publications from AIoT Laboratory</p>
        </div>

        <div class="publications-intro">
            <p>Our research contributions in Artificial Intelligence of Things, wireless security, edge computing, intelligent systems, and radio frequency fingerprinting.</p>
        </div>

        <!-- Publications by Year (Now to Past) -->
        <div class="year-section">
            <h3 class="year-heading">2025</h3>
            
            <div class="publication-item">
                <div class="pub-header">
                    <h4 class="pub-title">
                        <span class="pub-number">5</span>
                        Deep Learning for RF Fingerprinting in 6G Networks
                        <span class="title-links">
                            [<a href="#" target="_blank">PDF</a>]
                            [<a href="#" target="_blank">DOI</a>]
                            [<a href="#" target="_blank">Code</a>]
                        </span>
                    </h4>
                    <div class="pub-awards">
                        <span class="award-badge">Best Paper Award</span>
                    </div>
                </div>
                <div class="pub-meta">
                    <span class="pub-authors">Y. Chen, T. Tanaka, A. Yamada, S. Lee</span> | 
                    <span class="pub-venue">IEEE Transactions on Wireless Communications</span>
                    <span class="status-badge accepted">Accepted</span>
                </div>
                <div class="pub-note">
                    <small>To appear in the December 2025 issue</small>
                </div>
            </div>
            
            <div class="publication-item">
                <div class="pub-header">
                    <h4 class="pub-title">
                        <span class="pub-number">4</span>
                        Edge Intelligence for Real-time IoT Security
                        <span class="title-links">
                            [<a href="#" target="_blank">PDF</a>]
                            [<a href="#" target="_blank">DOI</a>]
                        </span>
                    </h4>
                </div>
                <div class="pub-meta">
                    <span class="pub-authors">Y. Chen, M. Kobayashi, H. Suzuki</span> | 
                    <span class="pub-venue">ACM MobiCom 2025</span>
                </div>
            </div>
        </div>

        <div class="year-section">
            <h3 class="year-heading">2024</h3>
            
            <div class="publication-item">
                <div class="pub-header">
                    <h4 class="pub-title">
                        <span class="pub-number">3</span>
                        Adaptive Machine Learning for IoT Device Authentication
                        <span class="title-links">
                            [<a href="#" target="_blank">PDF</a>]
                            [<a href="#" target="_blank">DOI</a>]
                            [<a href="#" target="_blank">Code</a>]
                        </span>
                    </h4>
                    <div class="pub-awards">
                        <span class="award-badge invited">Invited Paper</span>
                    </div>
                </div>
                <div class="pub-meta">
                    <span class="pub-authors">Y. Chen, R. Wang, K. Nakamura</span> | 
                    <span class="pub-venue">IEEE Internet of Things Journal</span>
                </div>
            </div>
            
            <div class="publication-item">
                <div class="pub-header">
                    <h4 class="pub-title">
                        <span class="pub-number">2</span>
                        Lightweight AI Models for Edge Computing
                        <span class="title-links">
                            [<a href="#" target="_blank">PDF</a>]
                            [<a href="#" target="_blank">DOI</a>]
                        </span>
                    </h4>
                </div>
                <div class="pub-meta">
                    <span class="pub-authors">Y. Chen, T. Sato, A. Johnson</span> | 
                    <span class="pub-venue">IEEE International Conference on Communications (ICC)</span>
                </div>
            </div>
        </div>

        <div class="year-section">
            <h3 class="year-heading">2023</h3>
            
            <div class="publication-item">
                <div class="pub-header">
                    <h4 class="pub-title">
                        <span class="pub-number">1</span>
                        Foundations of AIoT: A Survey
                        <span class="title-links">
                            [<a href="#" target="_blank">PDF</a>]
                            [<a href="#" target="_blank">DOI</a>]
                        </span>
                    </h4>
                </div>
                <div class="pub-meta">
                    <span class="pub-authors">Y. Chen</span> | 
                    <span class="pub-venue">ACM Computing Surveys</span>
                </div>
                <div class="pub-note">
                    <small>Comprehensive survey of AIoT technologies and applications</small>
                </div>
            </div>
        </div>

        <div class="publications-footer">
            <p><small>For pre-prints and additional materials, please visit our <a href="https://github.com/aiot-lab-yin" target="_blank">GitHub repository</a> or contact the authors directly.</small></p>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>