import os
import xml.etree.ElementTree as ET
from urllib.parse import quote
from datetime import datetime

def generate_sitemap(directory, base_url, extensions=['.html', '.htm']):
    """Gera um sitemap XML a partir do diretório especificado."""
    # Alterando para o namespace padrão do sitemap
    urlset = ET.Element('urlset', xmlns="http://www.sitemaps.org/schemas/sitemap/0.9")

    for root, dirs, files in os.walk(directory):
        for file in files:
            if not any(file.endswith(ext) for ext in extensions):
                continue

            file_path = os.path.join(root, file)
            relative_path = os.path.relpath(file_path, directory)  # Caminho relativo
            # Substitui separadores de diretório por barras
            url = f"{base_url}/{quote(relative_path.replace(os.sep, '/'))}"

            url_element = ET.SubElement(urlset, 'url')
            loc = ET.SubElement(url_element, 'loc')
            loc.text = url

            lastmod = ET.SubElement(url_element, 'lastmod')
            # Formato da data como 'YYYY-MM-DD'
            lastmod.text = datetime.fromtimestamp(os.path.getmtime(file_path)).strftime('%Y-%m-%d')

            changefreq = ET.SubElement(url_element, 'changefreq')
            changefreq.text = 'daily'  # Todas as páginas têm frequência diária

            priority = ET.SubElement(url_element, 'priority')
            priority.text = '1.0'  # Todas as páginas têm prioridade 1.0

    # Escrevendo o sitemap XML
    tree = ET.ElementTree(urlset)
    sitemap_path = os.path.join(directory, 'sitemap.xml')
    tree.write(sitemap_path, encoding='utf-8', xml_declaration=True)

if __name__ == '__main__':
    repo_directory = os.getcwd()  # Usa o caminho atual
    base_url = 'https://senhorvinicius.github.io'  # Substitua pelo seu domínio do GitHub Pages

    generate_sitemap(repo_directory, base_url)
    print("Sitemap gerado com sucesso!")
