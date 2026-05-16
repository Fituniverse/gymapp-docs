$files = @{
    "login.md"        = @{ id = "login";        title = "Prise en main";                    description = "Connectez-vous a votre espace GymApp" }
    "register.md"     = @{ id = "register";     title = "Inscription";                      description = "Creez votre espace GymApp" }
    "manager.md"      = @{ id = "manager";      title = "Gestion des administrateurs";      description = "Gerez les administrateurs de votre salle" }
    "customer.md"     = @{ id = "customer";     title = "Gestion des clients";              description = "Gerez les clients de votre salle" }
    "subscription.md" = @{ id = "subscription"; title = "Gestion des abonnements";          description = "Gerez les abonnements de vos clients" }
    "session.md"      = @{ id = "session";      title = "Gestion des seances";              description = "Gerez les seances de vos clients" }
    "package.md"      = @{ id = "package";      title = "Gestion des forfaits";             description = "Gerez les forfaits de votre salle" }
    "product.md"      = @{ id = "product";      title = "Gestion des stocks";               description = "Gerez les produits de votre salle" }
    "sale.md"         = @{ id = "sale";         title = "Gestion des ventes";               description = "Gerez les ventes de votre salle" }
    "payment.md"      = @{ id = "payment";      title = "Gestion des paiements";            description = "Gerez les paiements de votre salle" }
    "invoice.md"      = @{ id = "invoice";      title = "Gestion des factures";             description = "Gerez les factures de votre salle" }
    "event.md"        = @{ id = "event";        title = "Gestion des evenements";           description = "Gerez les evenements de votre salle" }
    "trash.md"        = @{ id = "trash";        title = "Corbeille";                        description = "Gerez les elements supprimes" }
}

foreach ($file in $files.Keys) {
    $path = "docs\$file"
    $meta = $files[$file]
    $frontmatter = "---`nid: $($meta.id)`ntitle: $($meta.title)`ndescription: $($meta.description)`n---`n`n"
    $content = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
    [System.IO.File]::WriteAllText($path, ($frontmatter + $content), [System.Text.Encoding]::UTF8)
    Write-Host "OK $file updated"
}