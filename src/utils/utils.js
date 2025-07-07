import Swal from "sweetalert2";

export const myId = () => {
    let id = [];
    let base = "0123456789ABCDEF";

    for (let i = 0; i < 18; i++) {
        let numero = (Math.random() * 15).toFixed(0);
        id.push(base[numero]);
    }
    return id.join("");
};

export const showConfirmDelete = async (onConfirmFn) => {
    const result = await Swal.fire({
        title: "¿Estás segura/o?",
        text: "¡Esta acción no se puede deshacer!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
    });

    if (!result.isConfirmed) return;

    try {
        await onConfirmFn(); // Ejecuta la acción (el DELETE)
        await Swal.fire({
            title: "¡Eliminado!",
            text: "El contacto ha sido eliminado.",
            icon: "success",
        });
    } catch (err) {
        console.error("❌ Error al eliminar contacto", err);
        Swal.fire({
            title: 'Error',
            text: err.response?.data?.message || 'Hubo un problema al eliminar el contacto.',
            icon: 'error',
            confirmButtonColor: '#d33',
        });
    }
};

export const showUpdateContact = async (onConfirmFn) => {
    const result = await Swal.fire({
        title: "¿Estás segura/o?",
        text: "¡Esta acción no se puede deshacer!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, actualizar",
        cancelButtonText: "Cancelar",
    });

    if (!result.isConfirmed) return;

    try {
        await onConfirmFn(); // Ejecuta la acción (el DELETE)
        await Swal.fire({
            title: "¡Actualizado!",
            text: "El contacto ha sido actualizado.",
            icon: "success",
        });
    } catch (err) {
        console.error("❌ Error al actualizar el contacto", err);
        Swal.fire({
            title: 'Error',
            text: err.response?.data?.message || 'Hubo un problema al actualizar el contacto.',
            icon: 'error',
            confirmButtonColor: '#d33',
        });
    }
};